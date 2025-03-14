import { delay } from "../helpers-and-hooks";
import type { Product } from "./product";

export async function getProductAsyncAwait(): Promise<Product> {
	const rawResult = await fetch("https://dummyjson.com/products/1");

	// Promise based
	//  return fetch('https://dummyjson.com/products')
	//       .then(res => res.json())
	//       .then(console.log);

	await delay(750);

	const JSONList = await rawResult.json();

	return {
		title: JSONList.title,
		description: JSONList.description,
		price: JSONList.price,
		reviews: JSONList.reviews,
		thumbnail: JSONList.thumbnail,
	};
}
