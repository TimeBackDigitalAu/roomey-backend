import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import pinoHttp, { GenReqId, Options, ReqId } from "pino-http";
import { v4 as uuidv4 } from "uuid";

const PinoLevelToGoogleLoggingSeverityLookup = Object.freeze({
  trace: "DEBUG",
  debug: "DEBUG",
  info: "INFO",
  warn: "WARNING",
  error: "ERROR",
  fatal: "CRITICAL",
});

const genReqId: GenReqId = (req, res) => {
  const id: ReqId = req.headers["x-request-id"] || uuidv4();
  res.setHeader("X-Request-Id", id as string);
  return id;
};

const customSuccessMessage = (req, res, responseTime: number) => {
  return `[${req.id || "*"}] "${req.method} ${req.url}" ${res.statusCode} - "${req.headers["host"]}" "${req.headers["user-agent"]}" - ${responseTime} ms`;
};

const customReceivedMessage = (req) => {
  return `[${req.id || "*"}] "${req.method} ${req.url}"`;
};

const customErrorMessage = (req, res, err: Error) => {
  return `[${req.id || "*"}] "${req.method} ${req.url}" ${res.statusCode} - "${req.headers["host"]}" "${req.headers["user-agent"]}" - message: ${err.message}`;
};

function cloudwatchLoggingConfig(): Options {
  return {
    messageKey: "message",
  };
}

function googleLoggingConfig(): Options {
  return {
    messageKey: "message",
    formatters: {
      level(label, number) {
        return {
          severity:
            PinoLevelToGoogleLoggingSeverityLookup[
              label as keyof typeof PinoLevelToGoogleLoggingSeverityLookup
            ] || PinoLevelToGoogleLoggingSeverityLookup["info"],
          level: number,
        };
      },
    },
  };
}

function consoleLoggingConfig(): Options {
  return {
    messageKey: "msg",
    transport: {
      target: "pino-pretty",
      options: {
        singleLine: true,
        ignore:
          "req.id,req.headers,req.remoteAddress,req.remotePort,res.headers",
      },
    },
  };
}

function logServiceConfig(logService: string): Options {
  switch (logService) {
    case "console":
      return consoleLoggingConfig();
    case "google":
      return googleLoggingConfig();
    case "aws":
      return cloudwatchLoggingConfig();
    default:
      return consoleLoggingConfig();
  }
}

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger;

  constructor() {
    const logLevel = process.env.LOG_LEVEL || "info";
    const logService = process.env.LOG_SERVICE || "console";
    const isDebug = process.env.DEBUG;

    const pinoHttpOptions: Options = {
      level: logLevel,
      genReqId: isDebug ? genReqId : undefined,
      serializers: isDebug
        ? {
            req: (req) => {
              req.body = req.raw?.body || req.body;
              return req;
            },
          }
        : undefined,
      customSuccessMessage,
      customReceivedMessage,
      customErrorMessage,
      ...logServiceConfig(logService),
    };

    this.logger = pinoHttp(pinoHttpOptions);
  }

  use(req: Request, res: Response, next: NextFunction): void {
    this.logger(req, res);
    next();
  }
}
