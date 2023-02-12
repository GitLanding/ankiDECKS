import { Controller, Get } from '@nestjs/common';

import { Product } from '../../contracts';
import { ProductsService } from '../../services/products';

@Controller('pop')
export class PopProductsController {
	constructor(private readonly service: ProductsService) {}

	@Get()
	getPopProducts(): Product[] {
		return this.service.getPopProducts();
	}
}
