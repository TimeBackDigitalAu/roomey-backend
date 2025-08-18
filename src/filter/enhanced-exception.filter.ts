import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { Request, Response } from "express";
import { ZodError } from "zod";

interface ErrorResponseBody {
  message?: string;
  details?: unknown;
}

interface ZodErrorDetail {
  field: string;
  message: string;
  value: unknown;
  code: string;
}

@Catch()
export class EnhancedExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(EnhancedExceptionFilter.name);

  public catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const requestId =
      (request.headers["x-request-id"] as string) ?? this.generateRequestId();
    const timestamp = new Date().toISOString();
    const path = request.url;
    const method = request.method;

    let status: number;
    let message: string;
    let error: string;
    let details: unknown = undefined;

    // Handle different types of exceptions
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const responseBody = exception.getResponse();

      if (typeof responseBody === "object" && responseBody !== null) {
        const errorBody = responseBody as ErrorResponseBody;
        message = errorBody.message ?? exception.message;
        details = errorBody.details;
      } else {
        message = exception.message;
      }

      error = this.getErrorType(status);
    } else if (exception instanceof ZodError) {
      status = HttpStatus.BAD_REQUEST;
      error = "VALIDATION_ERROR";
      message = "Validation failed";
      details = exception.errors.map(
        (err): ZodErrorDetail => ({
          field: err.path.join("."),
          message: err.message,
          value: (err as { received?: unknown }).received,
          code: err.code,
        })
      );
    } else if (exception instanceof PrismaClientKnownRequestError) {
      status = this.mapPrismaErrorToHttpStatus(exception.code);
      error = "DATABASE_ERROR";
      message = this.getPrismaErrorMessage(exception.code);
      details = {
        code: exception.code,
        meta: exception.meta,
      };
    } else if (exception instanceof PrismaClientValidationError) {
      status = HttpStatus.BAD_REQUEST;
      error = "VALIDATION_ERROR";
      message = "Database validation failed";
      details = {
        message: exception.message,
      };
    } else if (exception instanceof Error) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      error = "INTERNAL_SERVER_ERROR";
      message = exception.message;
      details = {
        name: exception.name,
        stack:
          process.env["NODE_ENV"] === "development"
            ? exception.stack
            : undefined,
      };
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      error = "UNKNOWN_ERROR";
      message = "An unexpected error occurred";
      details = {
        type: typeof exception,
        value: exception,
      };
    }

    // Log the error with appropriate level
    this.logError(exception, request, status, requestId);

    // Create error response
    const errorResponse = {
      success: false,
      error,
      message,
      timestamp,
      path,
      method,
      requestId,
      statusCode: status,
      details,
    };

    // Send error response
    response.status(status).json(errorResponse);
  }

  private getErrorType(status: number): string {
    switch (status as HttpStatus) {
      case HttpStatus.BAD_REQUEST:
        return "BAD_REQUEST";
      case HttpStatus.UNAUTHORIZED:
        return "UNAUTHORIZED";
      case HttpStatus.FORBIDDEN:
        return "FORBIDDEN";
      case HttpStatus.NOT_FOUND:
        return "NOT_FOUND";
      case HttpStatus.METHOD_NOT_ALLOWED:
        return "METHOD_NOT_ALLOWED";
      case HttpStatus.CONFLICT:
        return "CONFLICT";
      case HttpStatus.UNPROCESSABLE_ENTITY:
        return "UNPROCESSABLE_ENTITY";
      case HttpStatus.TOO_MANY_REQUESTS:
        return "TOO_MANY_REQUESTS";
      case HttpStatus.INTERNAL_SERVER_ERROR:
        return "INTERNAL_SERVER_ERROR";
      case HttpStatus.NOT_IMPLEMENTED:
        return "NOT_IMPLEMENTED";
      case HttpStatus.SERVICE_UNAVAILABLE:
        return "SERVICE_UNAVAILABLE";
      default:
        return "HTTP_ERROR";
    }
  }

  private mapPrismaErrorToHttpStatus(code: string): number {
    switch (code) {
      case "P2002": // Unique constraint violation
        return HttpStatus.CONFLICT;
      case "P2003": // Foreign key constraint violation
        return HttpStatus.BAD_REQUEST;
      case "P2025": // Record not found
        return HttpStatus.NOT_FOUND;
      case "P2027": // Multiple errors occurred
        return HttpStatus.BAD_REQUEST;
      case "P2034": // Transaction failed
        return HttpStatus.INTERNAL_SERVER_ERROR;
      default:
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }

  private getPrismaErrorMessage(code: string): string {
    switch (code) {
      case "P2002":
        return "A record with this unique field already exists";
      case "P2003":
        return "Referenced record does not exist";
      case "P2025":
        return "Record not found";
      case "P2027":
        return "Multiple validation errors occurred";
      case "P2034":
        return "Database transaction failed";
      default:
        return "Database operation failed";
    }
  }

  private logError(
    exception: unknown,
    request: Request,
    status: number,
    requestId: string
  ): void {
    const logContext = {
      requestId,
      method: request.method,
      path: request.url,
      statusCode: status,
      userAgent: request.headers["user-agent"],
      ip: request.ip ?? request.connection.remoteAddress,
      userId: (request as { user?: { id: string } }).user?.id,
    };

    if (status >= 500) {
      this.logger.error(
        `Server Error: ${exception instanceof Error ? exception.message : "Unknown error"}`,
        exception instanceof Error ? exception.stack : undefined,
        logContext
      );
    } else if (status >= 400) {
      this.logger.warn(
        `Client Error: ${exception instanceof Error ? exception.message : "Unknown error"}`,
        logContext
      );
    } else {
      this.logger.log(
        `Request processed: ${request.method} ${request.url}`,
        logContext
      );
    }
  }

  private generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}
