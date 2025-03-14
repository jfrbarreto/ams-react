import { Center, Container, Space } from "@mantine/core";
import { useEffect } from "react";
import { getProductList } from "../../lib/services";
import type { Product } from "../../lib/types";
import { ProductComponent } from "../components/product.component";

interface ProductListProps {
	productList: Product[] | undefined;
	setProductList: (productList: Product[]) => void;
	addProductToCart: (id: number | undefined) => void;
}

export const ProductListPage = ({
	productList,
	setProductList,
	addProductToCart,
}: ProductListProps) => {
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const getProductListLocal = async () => await getProductList();

		getProductListLocal().then((rawProductList) => {
			setProductList(rawProductList);
		});
	}, []);

	return (
		<Container>
			<Center style={{ flexDirection: "column" }}>
				{productList?.map((product, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index}>
						<ProductComponent
							product={product}
							addProductToCart={addProductToCart}
						/>
						<Space h={32} />
					</div>
				))}
			</Center>
		</Container>
	);
};
