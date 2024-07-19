import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const initSwaggerDocs = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Victu API')
    .setDescription('RESTful endpoints to implement victu functionality')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  return document;
};
