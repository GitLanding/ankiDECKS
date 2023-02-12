import { Controller, Get } from '@nestjs/common';

import { Product } from '../../contracts';
import { ProductsService } from '../../services/products';

@Controller('recommended')
export class RecommendedProductsController {
	constructor(private readonly service: ProductsService) {}

	@Get()
	getRecommendedProduct(): Product[] {
		return this.service.getRecommendedProduct();
	}
}
