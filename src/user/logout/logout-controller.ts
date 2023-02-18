
import { Controller, Get } from '@nestjs/common';

import { UserService } from '../../services/user';

@Controller('logout')
export class LogoutController {
	constructor(private readonly service: UserService) {}

	@Get()
	logout(): boolean {
		return this.service.logout();
	}
}