import { Test, TestingModule } from '@nestjs/testing';
import { TrashesService } from './trashes.service';

describe('TrashesService', () => {
  let service: TrashesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrashesService],
    }).compile();

    service = module.get<TrashesService>(TrashesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
