import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dtos/createProduct.dto';

@Injectable()
export class ProductsService {
    constructor( @InjectModel(Product.name) private productModel: Model<ProductDocument> ) {}

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    };

    async findAll(): Promise<Product[]> {
        return this.productModel.find().populate('trash');
    };

    async delete(id: string): Promise<Product> {
        return this.productModel.findOneAndDelete({ _id: id });
    };

    async findOne(id: string): Promise<Product> {
        return this.productModel.findOne({ _id: id }).populate('trash');
    };

    async updateTrash(id: string, trash: string): Promise<Product> {
        const updated = this.productModel.findByIdAndUpdate({ _id: id}, { trash });
        return (await updated).save();
    };
}
