import { Product } from './product';
import { ProductDetails } from './product-details';

export interface CurrentProduct {
	product: ProductDetails;
	featureProducts: Product[];
	similarProducts: Product[];
	dishes: any[];
}
