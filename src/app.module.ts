import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { PurchasesModule } from './payments/purchases.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot(),
    ProductsModule,
    UserModule,
    PurchasesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
