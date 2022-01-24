import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrashDocument = Trash & Document;

@Schema()
export class Trash {
  @Prop({ required: true })
  name: string;
}

export const TrashSchema = SchemaFactory.createForClass(Trash);