import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Client, ClientSchema} from "./schemas/client.schema";
import {AuthModule} from './auth/auth.module';

@Module({
  imports: [
      MongooseModule.forRoot("mongodb://root:6B4Xmk4E9h@localhost:27017/rooms?authSource=admin&readPreference=" +
          "primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"),
      MongooseModule.forFeature([
          {name: Client.name, schema: ClientSchema}
      ]),
      AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
