import { Controller, Get, Param, Post, Body, Delete, Patch, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dtos/createProduct.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    @Post('/new')
    create(@Body() body: CreateProductDto) {
        return this.productsService.create(body); 
    };

    @Delete('/:id')
    deleteProduct (@Param('id') id: string) {
        const product =  this.productsService.delete(id);
        if(!product) {
            throw new NotFoundException('Product not found');
        };
        return product;
    };

    @Patch()
    updateProduct (@Body() body: { id: string, trash: string }) {
        return this.productsService.updateTrash(body.id, body.trash);
    }

    @Get('/:id')
    findOne (@Param('id') id: string) {
        const product =  this.productsService.findOne(id);
        if(!product) {
            throw new NotFoundException('Product not found');
        };
        return product;
    };
}
