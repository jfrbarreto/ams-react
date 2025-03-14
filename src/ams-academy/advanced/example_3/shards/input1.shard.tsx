import { Box, Input } from "@mantine/core";
import type { ChangeEvent } from "react";
import { useExample_3Store } from "../example_3.store";

export const Input1 = () => {
	const input1 = useExample_3Store((state) => state.input1);
	const setInput1 = useExample_3Store((state) => state.setInput1);

	const handleInput1 = (event: ChangeEvent<HTMLInputElement>) =>
		setInput1(event.currentTarget.value);

	return (
		<>
			<Box>
				<Input placeholder="input #1" value={input1} onChange={handleInput1} />
			</Box>
		</>
	);
};
