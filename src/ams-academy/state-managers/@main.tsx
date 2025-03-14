import { Space } from "@mantine/core";
import { Address } from "./address";
import { ReactiveUserLabel } from "./reactiveUserLabel";
import { StaticUserLabel } from "./staticUserLabel";
import { Username } from "./username";

export function StateManagers() {
	return (
		<div>
			<Username />
			<Space h={32} />
			<ReactiveUserLabel />
			<Space h={32} />
			<StaticUserLabel />
			<Space h={32} />
			<Address />
		</div>
	);
}
