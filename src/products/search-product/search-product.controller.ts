import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from '../../services/products';
import { Product } from '../../contracts';

@Controller('search')
export class SearchProductController {
	constructor(private readonly s