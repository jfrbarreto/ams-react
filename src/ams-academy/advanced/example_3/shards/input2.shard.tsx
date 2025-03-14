import { Box, Input } from "@mantine/core";
import React, { type ChangeEvent } from "react";
import { useExample_3Store } from "../example_3.store";

export const Input2 = () => {
	const searchString = useExample_3Store((state) => state.searchString);
	const setSearchString = useExample_3Store((state) => state.setSearchString);

	const handleInput2 = (event: ChangeEvent<HTMLInputElement>) =>
		setSearchString(event.currentTarget.value);

	return (
		<>
			<Box>
				<Input
					placeholder="input #2"
					value={searchString}
					onChange={handleInput2}
				/>
			</Box>
		</>
	);
};
