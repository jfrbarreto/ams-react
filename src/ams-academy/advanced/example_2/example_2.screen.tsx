import { Box, Space } from "@mantine/core";
import { Form } from "./blocks/form";
import { Table } from "./blocks/table";
import { useExample2Helper } from "./example_2.helper";

export const Example_2 = () => {
	const {
		rows,
		input1,
		input2,
		button1,
		handleInput1,
		handleInput2,
		handleButton1,
		handleButton2,
	} = useExample2Helper();
	return (
		<Box style={{ padding: "64px" }}>
			<Form
				input1={input1}
				input2={input2}
				button1={button1}
				handleInput1={handleInput1}
				handleInput2={handleInput2}
				handleButton1={handleButton1}
				handleButton2={handleButton2}
			/>
			<Space h={32} />
			<Table rows={rows} />
		</Box>
	);
};
