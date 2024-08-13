import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwaggerDocs } from './shared/config/swagger/swagger';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://victu.vercel.app',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    credentials: true,
  });
  app.setGlobalPrefix('api');

  const swaggerDocs = initSwaggerDocs(app);
  SwaggerModule.setup('api/docs', app, swaggerDocs);

  await app.listen(port);
  console.log(`Server started on port: ${port}`);
}

bootstrap();
