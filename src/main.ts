import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerPath = process.env.SWAGGER_PATH;
  const PORT = process.env.APP_PORT || 2001;
  const swaggerLink = process.env.SWAGGER_LINK + PORT + `/${swaggerPath}`;

  const config = new DocumentBuilder()
    .setTitle('Base Project')
    .setDescription('Setting base project')
    .addTag('base-project')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerPath, app, document);
  await app.listen(PORT, () => {
    console.info(`Server running on port: ${PORT}`);
    console.info(`Swagger link: ${swaggerLink}`);
  });
}
bootstrap();
