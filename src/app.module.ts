import {Module} from "@nestjs/common";
import {AppController} from './app.controller';
import {AppServise} from "./app.servise";
import {SequelizeModule} from "@nestjs/sequelize";

@Module( {
    controllers: [AppController],
    providers: [AppServise],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'nest-app',
            models: [],
            autoLoadModels: true
        }),
    ],
})
export class AppModule {}