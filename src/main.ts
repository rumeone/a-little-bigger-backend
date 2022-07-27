import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipes} from "./pipes/validation.pipes";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle("Сreating documentation")
        .setDescription("check what is it")
        .setVersion("1.0.0")
        .addTag("RumeOne")
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    app.useGlobalPipes(new ValidationPipes());

    await app.listen(PORT, () => {
        console.log(`Server started on ${PORT}`);
    })
    
}

start();