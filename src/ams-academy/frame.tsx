import { Space } from "@mantine/core";
import { Outlet, useNavigate } from "react-router";

export function Frame() {
	const navigate = useNavigate();

	const navigateToComponent = () => {
		navigate("/component");
	};

	const navigateToProduct = () => {
		navigate("/product");
	};
	const navigateToReactHooks = () => {
		navigate("/react-hooks");
	};

	const navigateToStateManagers = () => {
		navigate("/state-managers");
	};

	const navigateToReactAdvanced = () => {
		navigate("/react-advanced");
	};
	const navigateToReactStyling = () => {
		navigate("/react-styling");
	};

	return (
		<div>
			<button type="button" onClick={navigateToComponent}>
				Component
			</button>
			<button type="button" onClick={navigateToProduct}>
				Product
			</button>
			<button type="button" onClick={navigateToReactHooks}>
				React Hooks
			</button>
			<button type="button" onClick={navigateToStateManagers}>
				State Managers
			</button>
			<button type="button" onClick={navigateToReactAdvanced}>
				React Advanced
			</button>
			<button type="button" onClick={navigateToReactStyling}>
				React Styling
			</button>
			<div>
				<Space h={48} />
				<Outlet />
			</div>
		</div>
	);
}
