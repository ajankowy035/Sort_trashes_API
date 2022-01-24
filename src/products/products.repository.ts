import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dtos/createProduct.dto';

@Injectable()
export class ProductsRepository {
    constructor( @InjectModel(Product.name) private productModel: Model<ProductDocument> ) {}

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    };

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }
}
