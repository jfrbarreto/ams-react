import { Button } from "@mantine/core";
import { getAccountsStore } from "./@account.store";

export function StaticUserLabel() {
	console.log("STATIC LABEL RENDER");

	return (
		<>
			<Button onClick={checkStatic}>static user</Button>
		</>
	);
}

function checkStatic() {
	console.log(getAccountsStore().user);
}
