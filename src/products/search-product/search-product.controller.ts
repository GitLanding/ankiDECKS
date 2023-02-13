import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from '../../services/products';
import { Product } from '../../contracts';

@Controller('search')
export class SearchProductController {
	constructor(private readonly service: ProductsService) {}

	@Post()
	getSearchProduct(@Body() body: {productName: string}): Product[] {
		return this.service.getSearchProduct(body.productName);
	}
}
