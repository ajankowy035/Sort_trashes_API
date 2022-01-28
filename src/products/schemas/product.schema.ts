import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Trash } from '../../trashes/schema/trash.schema';

export type ProductDocument = Product & mongoose.Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Trash' })
  trash: Trash;
}

export const ProductSchema = SchemaFactory.createForClass(Product);