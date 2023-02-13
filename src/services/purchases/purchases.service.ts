
import { Injectable } from '@nestjs/common';
import brain = require('brain.js');

@Injectable()
export class PurchasesService {

	buyProduct(): any {
		// const trainingData = [
		// 	'Jane saw Doug.',
		// 	'Doug saw Jane.',
		// 	'Spot saw Doug and Jane looking at each other.',
		// 	'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.',
		// ] as brain.RNNTrainingValue[];
		//
		// const lstm = new brain.recurrent.LSTM();
		// const result = lstm.train(trainingData, {
		// 	iterations: 1500,
		// 	errorThresh: 0.011,
		// });
		// const run1 = lstm.run('Jane');
		// const run2 = lstm.run('Doug');
		// const run3 = lstm.run('Spot');
		// const run4 = lstm.run('It');
		//
		// return run1;

		// Возможно скоро понадобятся
		// получить сколько раз были куплины различные товары за последние 30 покупок
		// найти большие вероятности

		// Рекомендуемые товары
		// получить рецепты
		// inputs: ингридиенты
		// output: блюда
		// предлагать товары в зависимоти от возможного блюда

		// Можно приготовить
		// получить рецепты
		// inputs: ингридиенты
		// output: блюда

		// Любимые блюда
		// предлагать новые блюда исходя из ингридиентов любимых блюд

		// получить все покупки в которых есть определеный товар
		// найти среди этих покупок товары с большей вероятностью

		const colors = [
			{ milk: 0.3, eggs: 3, sugar: 0.05 },
			{ milk: 0.5, eggs: 6, sugar: 0.2, flour: 0.3 },
			{ milk: 0.15, cereal: 0.2, sugar: 0.01 },
			{ meat: 2 },
			{ meat: 1, eggs: 2, flour: 0.2},
		];

		const brightnesses = [
			{ casserole: 1 },
			{ pancakes: 1 },
			{ cerealWithMilk: 1 },
			{ barbecue: 1 },
			{ chops: 1 },
		];

		const trainingData = [];

		for (let i = 0; i < colors.length; i++) {
			trainingData.push({
				input: colors[i],
				output: brightnesses[i],
			});
		}

		const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

		net.train(trainingData);

		return net.run({
			meat: 4, eggs: 10, flour: 1,
		});
	}
}













const net = new brain.NeuralNetwork();
net.train([{input: [0, 0], output: [0]},
	{input: [0, 1], output: [1]},
	{input: [1, 0], output: [1]},
	{input: [1, 1], output: [0]}]);
net.run([1, 0]); // 1


const data = [
	{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
	{input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
	{input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }},
	];

net.train(data, {
	errorThresh: 0.005, // порог ошибок, которого нужно достичь
	iterations: 20000, // максимальное число итераций обучения
	log: true, // нужен ли периодический console.log()
	logPeriod: 10, // число итераций между логированиями
	learningRate: 0.3, // степень обучения
});

net.run({ r: 1, g: 0.4, b: 0 }); // { white: 0.99, black: 0.002 }