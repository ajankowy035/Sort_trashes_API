import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { rootMongooseTestModule, closeInMongodConnection } from '../../test/mongoMemory';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
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

