import type { Product } from "./types";

export async function getProductList(): Promise<Product[]> {
	const rawProductList: Product[] = [];
	const rawResult = await fetch("https://dummyjson.com/products");

	const JSONList = await rawResult.json();

	// biome-ignore lint/complexity/noForEach: <explanation>
	JSONList.products.forEach((element: Product) => {
		rawProductList.push({
			id: element.id,
			title: element.title,
			description: element.description,
			price: element.price,
			reviews: element.reviews,
			thumbnail: element.thumbnail,
		});
	});

	return rawProductList;
}
