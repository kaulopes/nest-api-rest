import { Test, TestingModule } from '@nestjs/testing';
import { StockOutputsService } from './stock-outputs.service';
import { PrismaService } from '../prisma/prisma.service';

describe('StockOutputsService', () => {
  let service: StockOutputsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockOutputsService, PrismaService],
    }).compile();

    service = module.get<StockOutputsService>(StockOutputsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
