import { Controller, Get } from '@nestjs/common';

import { UserService } from '../../services/user';

@Controller('sign')
export class SignUpController {
	constructor(private readonly service: UserService) {}

	@Get()
	signUp(): boolean {
		return this.service.signUp();
	}
}
