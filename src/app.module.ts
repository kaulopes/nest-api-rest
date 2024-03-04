import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { StockInputsModule } from './stock-inputs/stock-inputs.module';
import { StockOutputsModule } from './stock-outputs/stock-outputs.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ProductsModule, StockInputsModule, StockOutputsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
