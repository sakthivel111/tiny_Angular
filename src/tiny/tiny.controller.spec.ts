import { Test, TestingModule } from '@nestjs/testing';
import { TinyController } from './tiny.controller';
import { TinyService } from './tiny.service';

describe('TinyController', () => {
  let controller: TinyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TinyController],
      providers: [TinyService],
    }).compile();

    controller = module.get<TinyController>(TinyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
