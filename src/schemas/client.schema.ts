import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type ClientDocument = Client & Document;

@Schema()
export class Client {

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    phone: string;

    @Prop({required: true})
    consultation: boolean;

    @Prop({required: true})
    order: boolean;

    @Prop({required: true})
    isView: boolean;
}

export const ClientSchema = SchemaFactory.createForClass(Client);