import { Button, Container, Space, Title } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { Outlet, useNavigate } from "react-router";

interface HeaderProps {
	cartCount: number;
}

export function Header({ cartCount }: HeaderProps) {
	const navigate = useNavigate();

	const navigateToProductList = () => {
		navigate("/");
	};

	const navigateToCheckout = () => {
		navigate("/checkout");
	};

	return (
		<>
			<Container
				fluid
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div>
					<Title order={1}>AMS SHOP</Title>
				</div>
				<div style={{ display: "flex", flexDirection: "row" }}>
					<Button onClick={navigateToProductList}>Product List</Button>
					<Space w={32} />
					<Button
						onClick={navigateToCheckout}
						leftSection={<IconShoppingCart size={24} />}
						variant="default"
						style={{ fontSize: 20 }}
					>
						{cartCount}
					</Button>
				</div>
			</Container>
			<Space h={64} />
			<Outlet />
		</>
	);
}
