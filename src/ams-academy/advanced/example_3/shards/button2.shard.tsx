import { Box, Button } from "@mantine/core";
import { useExample_3Store } from "../example_3.store";

export const Button2 = () => {
	// reactive
	const input1 = useExample_3Store((state) => state.input1);
	const input2 = useExample_3Store((state) => state.input2);
	const handleButton2 = () => console.log(input1, input2);

	// snapshot
	// const handleButton2 = () => {
	// 	const snapshot = getExample_3Store();
	// 	console.log(snapshot.input1, snapshot.input2);
	// };
	return (
		<Box>
			<Button variant={"filled"} onClick={handleButton2}>
				Submit
			</Button>
		</Box>
	);
};
