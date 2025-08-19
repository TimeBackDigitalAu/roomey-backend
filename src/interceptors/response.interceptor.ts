import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface StandardResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  timestamp: string;
  path: string;
  method: string;
  requestId: string;
  responseTime: number;
}

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
  };
}

interface PaginatedData<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

interface HealthCheckData {
  status: string;
  [key: string]: unknown;
}

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, StandardResponse<T>>
{
  private readonly logger = new Logger(ResponseInterceptor.name);

  public intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<StandardResponse<T>> {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const response = context.switchToHttp().getResponse<Response>();
    const startTime = Date.now();

    // Generate or get request ID
    const requestId =
      (request.headers['x-request-id'] as string) ?? this.generateRequestId();
    request.headers['x-request-id'] = requestId;

    // Set request ID in response headers
    response.setHeader('X-Request-ID', requestId);

    return next.handle().pipe(
      tap(() => {
        const responseTime = Date.now() - startTime;
        response.setHeader('X-Response-Time', `${responseTime}ms`);

        // Log successful requests
        this.logger.log(
          `${request.method} ${request.url} - ${response.statusCode} - ${responseTime}ms`,
          {
            requestId,
            method: request.method,
            path: request.url,
            statusCode: response.statusCode,
            responseTime,
            userAgent: request.headers['user-agent'],
            ip: request.ip ?? request.connection.remoteAddress,
            userId: request.user?.id,
          }
        );
      }),
      map((data: T) => {
        const responseTime = Date.now() - startTime;

        // Don't wrap if it's already a standard response
        if (data && typeof data === 'object' && 'success' in data) {
          return data as unknown as StandardResponse<T>;
        }

        // Create standard response
        const standardResponse: StandardResponse<T> = {
          success: true,
          data,
          timestamp: new Date().toISOString(),
          path: request.url,
          method: request.method,
          requestId,
          responseTime,
        };

        return standardResponse;
      })
    );
  }

  private generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

@Injectable()
export class PaginationResponseInterceptor<T>
  implements NestInterceptor<T[], StandardResponse<T[]>>
{
  private readonly logger = new Logger(PaginationResponseInterceptor.name);

  public intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<StandardResponse<T[]>> {
    const request = context.switchToHttp().getRequest<Request>();
    const startTime = Date.now();
    const requestId =
      (request.headers['x-request-id'] as string) ?? this.generateRequestId();

    return next.handle().pipe(
      map((data: unknown) => {
        const responseTime = Date.now() - startTime;

        // Handle paginated responses
        if (
          data &&
          typeof data === 'object' &&
          'data' in data &&
          'pagination' in data
        ) {
          const paginatedData = data as PaginatedData<T>;
          return {
            success: true,
            data: paginatedData.data,
            pagination: paginatedData.pagination,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
            requestId,
            responseTime,
          };
        }

        // Handle array responses
        if (Array.isArray(data)) {
          return {
            success: true,
            data,
            count: data.length,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
            requestId,
            responseTime,
          };
        }

        // Default response
        return {
          success: true,
          data: data as T[],
          timestamp: new Date().toISOString(),
          path: request.url,
          method: request.method,
          requestId,
          responseTime,
        };
      })
    );
  }

  private generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

@Injectable()
export class HealthCheckResponseInterceptor
  implements NestInterceptor<HealthCheckData, HealthCheckData>
{
  private readonly logger = new Logger(HealthCheckResponseInterceptor.name);

  public intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<HealthCheckData> {
    const request = context.switchToHttp().getRequest<Request>();
    const startTime = Date.now();
    const requestId =
      (request.headers['x-request-id'] as string) ?? this.generateRequestId();

    return next.handle().pipe(
      map((data: HealthCheckData) => {
        const responseTime = Date.now() - startTime;

        // For health checks, return the data as-is but add metadata
        if (data && typeof data === 'object' && 'status' in data) {
          return {
            ...data,
            timestamp: new Date().toISOString(),
            responseTime,
            requestId,
          };
        }

        return data;
      })
    );
  }

  private generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}
