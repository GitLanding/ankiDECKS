import { Module } from '@nestjs/common';

import { AllProductsController } from './all-products';
import { CurrentProductsController } from './current-products';
import { PopProductsController } from './pop-products';
import { RecommendedProductsController } from './recommended-products';
import { ProductsService } from '../services/products';
import { SearchProductController } from './search-product/search-product.controller';

@Module({
  controllers: [
    PopProductsController,
    AllProductsController,
    CurrentProductsController,
    RecommendedProductsController,
    SearchProductController,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
