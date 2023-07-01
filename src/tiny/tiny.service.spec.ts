import { Test, TestingModule } from '@nestjs/testing';
import { TinyService } from './tiny.service';

describe('TinyService', () => {
  let service: TinyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TinyService],
    }).compile();

    service = module.get<TinyService>(TinyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
