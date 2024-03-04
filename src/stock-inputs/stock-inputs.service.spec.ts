import { Test, TestingModule } from '@nestjs/testing';
import { StockInputsService } from './stock-inputs.service';
import { PrismaService } from '../prisma/prisma.service';

describe('StockInputsService', () => {
  let service: StockInputsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockInputsService, PrismaService],
    }).compile();

    service = module.get<StockInputsService>(StockInputsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
