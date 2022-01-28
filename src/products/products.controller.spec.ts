import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import * as request from 'supertest';
import { rootMongooseTestModule, closeInMongodConnection } from '../../test/mongoMemory';
import { INestApplication } from '@nestjs/common';

import { ProductSchema, Product } from './schemas/product.schema';
import { ProductsService } from './products.service';
import { StringifyOptions } from 'querystring';


describe('Products service', ()=>{
  let app: INestApplication;
  let fakeProductsService;

  beforeEach(async ()=>{
    fakeProductsService={
      findOne: async (id: string): Promise<Product> =>({ name: 'test', trash: { name: 'test'}}),
      findAll: async (): Promise<Product[]>=>([{ name: 'test', trash: { name: 'test'}}]),
      create: async (): Promise<Product> =>({ name: 'test', trash: { name: 'test'}}),
      updateTrash: async (id: StringifyOptions, trash: string): Promise<Product> => ({ name: 'test', trash: { name: 'test'}}),
      delete: async (id: string): Promise<Product> =>({ name: 'test', trash: { name: 'test'}}),
    };
    const module: TestingModule = await Test.createTestingModule({   
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
      ]}).overrideProvider(ProductsService).useValue(fakeProductsService).compile();

  app = module.createNestApplication();
  await app.init();
  });

  it('Calls function findAll', async() => {
    request(app.getHttpServer())
    .get('/products')
    .expect(200)
    .expect({
      data: fakeProductsService.findAll()
    });
  });

  it('Calls function fcreate', async() => {
    request(app.getHttpServer())
    .post('/products/new')
    .expect(200)
    .expect({
      data: fakeProductsService.create()
    });
  });

  it('Calls function delete', async() => {
    request(app.getHttpServer())
    .delete('/products/1')
    .expect(200)
    .expect({
      data: fakeProductsService.delete()
    });
  });

    afterAll(() => {
      closeInMongodConnection();
      app.close();
    });
});