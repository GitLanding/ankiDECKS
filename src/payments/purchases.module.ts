import { Module } from '@nestjs/common';

import { BuyProductController } from './purchases';
import { PurchasesService } from '../services/purchases';

@Module({
	controllers: [
		BuyProductController,
	],
	providers: [PurchasesService],
})
export class PurchasesModule {}
