import { Body, Controller, Post } from '@nestjs/common';

import { ProductsService } from '../../services/products';
import { CurrentProduct } from '../../contracts/current-product';

@Controller('current')
export class CurrentProductsController {
	constructor(private readonly service: ProductsService) {}

	@Post()
	get