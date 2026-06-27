import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // set global prefix - versioning api
  // app.setGlobalPrefix('api/v1', {
  //   exclude: [''],
  // });
  // global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove properties that are not allowed in the DTO
      forbidNonWhitelisted: true, // throw an error if there are properties that are not allowed in the DTO
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
