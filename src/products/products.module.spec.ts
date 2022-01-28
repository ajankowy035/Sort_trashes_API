import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { rootMongooseTestModule, closeInMongodConnection } from '../../test/mongoMemory';

import { ProductSchema } from './schemas/product.schema';
import { ProductsService } from './products.service';

describe('Products service', ()=>{
    let service: ProductsService;

    beforeEach(async ()=>{
        const module: TestingModule = await Test.createTestingModule({   
            imports: [
                rootMongooseTestModule(),
                MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
            ],
            providers: [ProductsService],

        }).compile();

        service = module.get<ProductsService>(ProductsService);
    });


    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    afterAll(async () => {
        await closeInMongodConnection();
    });
});