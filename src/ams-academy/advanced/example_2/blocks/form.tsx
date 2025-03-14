import { Box, Button, Input, Space } from "@mantine/core";
import React, { type ChangeEvent, type FC } from "react";

interface FormProps {
	input1: string;
	input2: string;
	button1: string;
	handleInput1(event: ChangeEvent<HTMLInputElement>): void;
	handleInput2(event: ChangeEvent<HTMLInputElement>): void;
	handleButton1(): void;
	handleButton2(): void;
}

export const Form: FC<FormProps> = ({
	input1,
	input2,
	button1,
	handleInput1,
	handleInput2,
	handleButton1,
	handleButton2,
}) => {
	return (
		<>
			<Box>
				<Input placeholder="input #1" value={input1} onChange={handleInput1} />
			</Box>
			<Space h={32} />
			<Box>
				<Input placeholder="input #2" value={input2} onChange={handleInput2} />
			</Box>
			<Space h={32} />
			<Box>
				<Button variant={"outline"} onClick={handleButton1}>
					{button1}
				</Button>
			</Box>
			<Space h={32} />
			<Box>
				<Button variant={"filled"} onClick={handleButton2}>
					Submit
				</Button>
			</Box>
		</>
	);
};
