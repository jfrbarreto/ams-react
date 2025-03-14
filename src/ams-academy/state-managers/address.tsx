import { Input, InputLabel } from "@mantine/core";
import { useAccountsStore } from "./@account.store";

export function Address() {
	const address = useAccountsStore((state) => state.address);
	const setAddress = useAccountsStore((state) => state.setAddress);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAddress(e.target.value);
	};

	console.log("ADDRESS RENDER");

	return (
		<div>
			<InputLabel>address</InputLabel>
			<Input
				placeholder="other value"
				onChange={(e) => handleOnChange(e)}
				value={address}
			/>
		</div>
	);
}
