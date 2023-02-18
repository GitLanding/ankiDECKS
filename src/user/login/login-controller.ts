import { Controller, Get, Param } from '@nestjs/common';

import { UserService } from '../../services/user';

@Controller('login')
export class LoginController {
	constructor(private readonly service: UserService) {}

	// @Get(':id')
	// login(@Param() params) {
	// 	return this.service.login(params.id);
	// }
}
