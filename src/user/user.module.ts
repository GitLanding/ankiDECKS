
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoginController } from './login';
import { LogoutController } from './logout';
import { SignUpController } from './sign-up';
import { UserService } from '../services/user';
// import { User } from '../user.entity';

@Module({
	// imports: [TypeOrmModule.forFeature([User])],
	controllers: [
		LoginController,
		LogoutController,
		SignUpController,
	],
	providers: [UserService],
})
export class UserModule {}