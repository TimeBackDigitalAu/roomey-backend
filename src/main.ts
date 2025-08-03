import { VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { AllExceptionsFilter } from "./filter/filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });

  // app.use(new LoggerMiddleware().use.bind(new LoggerMiddleware()));

  app.enableCors({
    origin: process.env.WEBSITE_URL,
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
    .setTitle("Auth Service")
    .setDescription("The Auth Service API description")
    .setVersion("1.0")
    .addTag("Auth Service")
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    deepScanRoutes: true, // will attempt to include dynamic routes
  });
  SwaggerModule.setup("api/docs", app, document);

  app.setGlobalPrefix("api/v1");

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
