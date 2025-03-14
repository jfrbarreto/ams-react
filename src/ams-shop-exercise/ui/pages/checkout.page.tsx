import { Center, Container, Space } from "@mantine/core";
import type { Product } from "../../lib/types";
import { ProductComponent } from "../components/product.component";

interface CheckoutProps {
	buildCheckoutProductList: () => (Product | undefined)[];
}

export const CheckoutPage = ({ buildCheckoutProductList }: CheckoutProps) => {
	return (
		<Container>
			<Center style={{ flexDirection: "column" }}>
				{buildCheckoutProductList()?.map((product, index) => (
					<>
						{/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
						<ProductComponent key={index} product={product} />
						<Space h={32} />
					</>
				))}
			</Center>
		</Container>
	);
};
