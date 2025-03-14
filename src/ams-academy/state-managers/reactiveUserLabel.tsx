import { Card } from "@mantine/core";
import { useAccountsStore } from "./@account.store";

export function ReactiveUserLabel() {
	const user = useAccountsStore((state) => state.user);

	console.log("REACTIVE LABEL RENDER");

	return (
		<>
			<Card>reactive label: {user}</Card>
		</>
	);
}
