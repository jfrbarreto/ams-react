import { Input, InputLabel } from "@mantine/core";
import { useAccountsStore } from "./@account.store";

export function Username() {
	//   const { user, setUser } = useAccountsStore();
	//
	const user = useAccountsStore((state) => state.user);
	const setUser = useAccountsStore((state) => state.setUser);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser(e.target.value);
	};

	console.log("USERNAME RENDER");

	return (
		<div>
			<InputLabel>username</InputLabel>
			<Input onChange={(e) => handleOnChange(e)} value={user} />
		</div>
	);
}
