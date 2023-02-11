
import { Controller, Get } from '@nestjs/common';

import { PurchasesService } from '../../services/purchases';

@Controller('buy')
export class BuyProductController {
	constructor(private readonly service: PurchasesService) {}

	@Get()
	buyProduct(): boolean {
		return this.service.buyProduct();
	}
}