import { useState } from "react";
import type { Product } from "./types";

export const useGlobalState = () => {
	const [productList, _setProductList] = useState<Product[]>();
	const [cartItems, _setCartItems] = useState<(number | undefined)[]>([]);

	const setProductList = (products: Product[]) => {
		_setProductList(products);
	};

	const addProductToCart = (id: number | undefined) => {
		_setCartItems((currentState) => [...currentState, id]);
	};

	const cartCount = cartItems.length;

	const buildCheckoutProductList = () => {
		const checkoutProductList: (Product | undefined)[] = [];

		// biome-ignore lint/complexity/noForEach: <explanation>
		cartItems.forEach((productID) => {
			checkoutProductList.push(
				productList?.filter((product) => product.id === productID)[0],
			);
		});

		return checkoutProductList;
	};

	return {
		productList,
		setProductList,
		addProductToCart,
		cartCount,
		buildCheckoutProductList,
	};
};
