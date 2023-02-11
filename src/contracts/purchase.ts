import { Product } from './product';

export interface Purchase {
	id: string;
	date: string;
	cost: string;
	products: Product[];
}
