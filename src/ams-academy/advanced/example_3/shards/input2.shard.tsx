import { Box, Input } from "@mantine/core";
import type { ChangeEvent } from "react";
import { useExample_3Store } from "../example_3.store";

export const Input2 = () => {
	const input2 = useExample_3Store((state) => state.input2);
	const setInput2 = useExample_3Store((state) => state.setInput2);

	const handleInput2 = (event: ChangeEvent<HTMLInputElement>) =>
		setInput2(event.currentTarget.value);

	return (
		<>
			<Box>
				<Input placeholder="input #2" value={input2} onChange={handleInput2} />
			</Box>
		</>
	);
};
