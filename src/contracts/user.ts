import { Purchase } from './purchase';

export interface User {
	id: string;
	name: string;
	lastName: string;
	purse: string;
	purchases: Purchase[];
}
