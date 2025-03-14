import { Box, Input } from "@mantine/core";
import React, { type ChangeEvent, useState } from "react";

export const Input1 = () => {
	const [input1, setInput1] = useState<string>("");
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
