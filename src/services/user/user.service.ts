import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// import { User } from '../../user.entity';

@Injectable()
export class UserService {
	// constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

	// login(id: number): Promise<User[]> {
	// 	return this.usersRepository.find({
	// 		select: ['fullName', 'birthday', 'isActive'],
	// 		where: [{ id }],
	// 	});
	// }

	logout(): boolean {
		return true;
	}

	signUp(): boolean {
		return true;
	}
}
