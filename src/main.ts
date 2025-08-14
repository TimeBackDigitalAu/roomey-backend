import { VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { appConfig } from "./config/app-config";
import { AllExceptionsFilter } from "./filter/filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });

  app.enableCors({
    origin: appConfig.WEBSITE_URL,
    methods: ["GET", "POST", "PUT", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  });

  app.useGlobalFilters(new AllExceptionsFilter());

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle(appConfig.APP_NAME)
    .setDescription("Roomey Service API Documentation")
    .setVersion("1.0")
    .addTag(appConfig.APP_NAME)
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    deepScanRoutes: true, // will attempt to include dynamic routes
  });
  SwaggerModule.setup("api/docs", app, document);

  app.setGlobalPrefix("api");

  await app.listen(appConfig.PORT);
}
bootstrap();
