import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Client, ClientDocument} from "./schemas/client.schema";
import {Model} from "mongoose";
import {CreateClientDto} from "./dto/create-client.dto";

@Injectable()
export class AppService {

    constructor(@InjectModel(Client.name) private clientRepository: Model<ClientDocument>) {
    }

    async getAll(): Promise<Client[]> {
        return await this.clientRepository.find().exec();
    }

    async getById(id: string): Promise<Client> {
        return await this.clientRepository.findById(id).exec();
    }

    async createClient(clientDto: CreateClientDto): Promise<Client> {
        const newClient = await new this.clientRepository(clientDto);
        return newClient.save();
    }

    async removeClient(id: string): Promise<void> {
        await this.clientRepository.findByIdAndRemove(id);
    }

    async updateClient(id: string, dto: CreateClientDto): Promise<Client> {
        return await this.clientRepository.findByIdAndUpdate(id, dto, {new: true}).exec();
    }
}
