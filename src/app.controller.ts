import {Controller, Get} from "@nestjs/common";
import {AppServise} from "./app.servise";

@Controller('/api')
export class AppController {

    constructor(private appService: AppServise) {
    }

    @Get('/users')
    getUsers() {
        return this.appService.getUsers()
    }
}