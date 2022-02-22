import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards} from '@nestjs/common';
import {AppService} from './app.service';
import {Client} from "./schemas/client.schema";
import {CreateClientDto} from "./dto/create-client.dto";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";

@Controller("api/client")
@UseGuards(JwtAuthGuard)
export class AppController {
    constructor(private readonly clientService: AppService) {
    }

    @Get()
    getAll(): Promise<Client[]> {
        return this.clientService.getAll();
    }

    @Get(":id")
    getById(@Param('id') id: string): Promise<Client> {
        return this.clientService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createClient(@Body() dto: CreateClientDto): Promise<Client> {
        return this.clientService.createClient(dto);
    }

    @Put(':id')
    updateClient(@Param("id") id: string, @Body() dto: CreateClientDto): Promise<Client> {
        return this.clientService.updateClient(id, dto);
    }

    @Delete(":id")
    removeClient(@Param("id") id: string): Promise<void> {
        return this.clientService.removeClient(id);
    }
}
