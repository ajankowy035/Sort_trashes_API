import { Test, TestingModule } from '@nestjs/testing';
import { TrashesController } from './trashes.controller';

describe('TrashesController', () => {
  let controller: TrashesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrashesController],
    }).compile();

    controller = module.get<TrashesController>(TrashesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
