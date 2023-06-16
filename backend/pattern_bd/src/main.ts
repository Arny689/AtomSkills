import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3001
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))
  await app.listen(port , () => {console.log(`Server start on port ${port}`)})
}
bootstrap();
