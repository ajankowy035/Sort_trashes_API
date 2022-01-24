import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TrashesService } from './trashes.service';
import { TrashesController } from './trashes.controller';
import { Trash, TrashSchema } from './schema/trash.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Trash.name, schema: TrashSchema }])],
  providers: [TrashesService],
  controllers: [TrashesController]
})
export class TrashesModule {}
