import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TrashesModule } from './trashes/trashes.module';
import 'dotenv/config';

@Module({
  imports: [ProductsModule, TrashesModule,
    MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
