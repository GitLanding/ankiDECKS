import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// import { User } from '../../user.entity';

@Injectable()
export class UserService {
	// constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

	// login(id: number)