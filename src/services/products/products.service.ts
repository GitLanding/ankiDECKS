
import { Injectable } from '@nestjs/common';

import { Product } from '../../contracts';
import { ProductDetails } from '../../contracts/product-details';
import { CurrentProduct } from '../../contracts/current-product';

@Injectable()
export class ProductsService {
	public bestFoodProducts: ProductDetails[] = [
		{
			id: '286310',
			name: 'Виноград синий, 1 кг.',
			packing: 'фасовка 1&nbsp;-&nbsp;1.2 кг',
			country: 'Молдова',
			weight: '1 кг',
			cost: '2.99',
			nutritionalValue: [
				{name: 'Белки', value: '0.72 г'},
				{name: 'Жиры', value: '0.16 г'},
				{name: 'Углеводы', value: '18.1 г'},
				{name: 'Энергетическая ценность', value: '69 ккал/ 288 кДж'},
			],
			description: 'Сорт: Кодрянка, класс 1. Урожай: 2019 г.',
			pop: '4.34',
			image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
		},
		{
			id: '286310',
			name: 'Виноград синий, 1 кг.',
			packing: 'фасовка 1&nbsp;-&nbsp;1.2 кг',
			country: 'Молдова',
			weight: '1 кг',
			cost: '2.99',
			nutritionalValue: [
				{name: 'Белки', value: '0.72 г'},
				{name: 'Жиры', value: '0.16 г'},
				{name: 'Углеводы', value: '18.1 г'},
				{name: 'Энергетическая ценность', value: '69 ккал/ 288 кДж'},
			],
			description: 'Сорт: Кодрянка, класс 1. Урожай: 2019 г.',
			pop: '4.34',
			image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
		},
		{
			id: '286310',
			name: 'Виноград синий, 1 кг.',
			packing: 'фасовка 1&nbsp;-&nbsp;1.2 кг',
			country: 'Молдова',
			weight: '1 кг',
			cost: '2.99',
			nutritionalValue: [
				{name: 'Белки', value: '0.72 г'},
				{name: 'Жиры', value: '0.16 г'},
				{name: 'Углеводы', value: '18.1 г'},
				{name: 'Энергетическая ценность', value: '69 ккал/ 288 кДж'},
			],
			description: 'Сорт: Кодрянка, класс 1. Урожай: 2019 г.',
			pop: '4.34',
			image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
		},
		{
			id: '286310',
			name: 'Виноград синий, 1 кг.',
			packing: 'фасовка 1&nbsp;-&nbsp;1.2 кг',
			country: 'Молдова',
			weight: '1 кг',
			cost: '2.99',
			nutritionalValue: [
				{name: 'Белки', value: '0.72 г'},
				{name: 'Жиры', value: '0.16 г'},
				{name: 'Углеводы', value: '18.1 г'},
				{name: 'Энергетическая ценность', value: '69 ккал/ 288 кДж'},
			],
			description: 'Сорт: Кодрянка, класс 1. Урожай: 2019 г.',
			pop: '4.34',
			image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
		},
		{
			id: '286310',
			name: 'Виноград синий, 1 кг.',
			packing: 'фасовка 1&nbsp;-&nbsp;1.2 кг',
			country: 'Молдова',
			weight: '1 кг',
			cost: '2.99',
			nutritionalValue: [
				{name: 'Белки', value: '0.72 г'},
				{name: 'Жиры', value: '0.16 г'},
				{name: 'Углеводы', value: '18.1 г'},
				{name: 'Энергетическая ценность', value: '69 ккал/ 288 кДж'},
			],
			description: 'Сорт: Кодрянка, класс 1. Урожай: 2019 г.',
			pop: '4.34',
			image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
		},
	];

	getAllProducts(): ProductDetails[] {
		return this.bestFoodProducts;
	}

	getCurrentProducts(pn: string): CurrentProduct {
		return {
			  product: {
				  id: pn,
				  name: 'Виноград синий, 1 кг.',
				  packing: 'фасовка 1&nbsp;-&nbsp;1.2 кг',
				  country: 'Молдова',
				  weight: '1 кг',
				  cost: '2.99',
				  nutritionalValue: [
					  {name: 'Белки', value: '0.72 г'},
					  {name: 'Жиры', value: '0.16 г'},
					  {name: 'Углеводы', value: '18.1 г'},
					  {name: 'Энергетическая ценность', value: '69 ккал/ 288 кДж'},
				  ],
				  description: 'Сорт: Кодрянка, класс 1. Урожай: 2019 г.',
				  pop: '4.34',
				  image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
			  },
			  featureProducts: [
				  {
					  id: '286310',
					  image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
					  cost: '2.99',
					  name: 'Виноград синий, 1 кг.',
					  pop: '4.34',
				  },
				  {
					  id: '286310',
					  image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
					  cost: '2.99',
					  name: 'Виноград синий, 1 кг.',
					  pop: '4.34',
				  },
				  {
					  id: '286310',
					  image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
					  cost: '2.99',
					  name: 'Виноград синий, 1 кг.',
					  pop: '4.34',
				  },
				  {
					  id: '286310',
					  image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
					  cost: '2.99',
					  name: 'Виноград синий, 1 кг.',
					  pop: '4.34',
				  },
				  {
					  id: '286310',
					  image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
					  cost: '2.99',
					  name: 'Виноград синий, 1 кг.',
					  pop: '4.34',
				  },
			  ],
			  similarProducts: [
				  {
					  id: '286310',
					  image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
					  cost: '2.99',
					  name: 'Виноград синий, 1 кг.',
					  pop: '4.34',
				  },
				  {
					  id: '286310',
					  image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
					  cost: '2.99',
					  name: 'Виноград синий, 1 кг.',
					  pop: '4.34',
				  },
				  {
					  id: '286310',
					  image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
					  cost: '2.99',
					  name: 'Виноград синий, 1 кг.',
					  pop: '4.34',
				  },
				  {
					  id: '286310',
					  image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
					  cost: '2.99',
					  name: 'Виноград синий, 1 кг.',
					  pop: '4.34',
				  },
				  {
					  id: '286310',
					  image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
					  cost: '2.99',
					  name: 'Виноград синий, 1 кг.',
					  pop: '4.34',
				  },
			  ],
			  dishes: [],
			};
	}

	getPopProducts(): Product[] {
		return [
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
		];
	}

	getRecommendedProduct(): ProductDetails[] {
		return this.bestFoodProducts;
	}

	getSearchProduct(productName: string): Product[] {
		return [
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: productName,
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
			{
				id: '286310',
				image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
				cost: '2.99',
				name: 'Виноград синий, 1 кг.',
				pop: '4.34',
			},
		];
	}
}