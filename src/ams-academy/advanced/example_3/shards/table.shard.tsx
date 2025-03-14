import { Table as MantineTable } from "@mantine/core";
import React, { type ReactNode, useMemo } from "react";
import * as jsonTable from "../../mock_table/table_10000.json";
import type { TableItems } from "../../types";
import { useExample_3Store } from "../example_3.store";

export const Table = () => {
	const searchString = useExample_3Store((state) => state.searchString);

	const table = JSON.parse(JSON.stringify(jsonTable)).default;

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const rows: ReactNode = useMemo(() => {
		return table.map((element: TableItems) => (
			<tr key={element._id}>
				<td>{element.name}</td>
				<td>{element.age}</td>
				<td>{element.gender}</td>
				<td>{element.eyeColor}</td>
				<td>{element.email}</td>
				<td>{element.favoriteFruit}</td>
			</tr>
		));
	}, [table.length]);

	return (
		<>
			<MantineTable>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Eye Color</th>
						<th>Email</th>
						<th>Favorite Fruit</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</MantineTable>
		</>
	);
};

// const rows: ReactNode = useMemo(() => {
//   return table.map((element: TableItems) => (
//     <tr key={element._id}>
//       <td>{element.name}</td>
//       <td>{element.age}</td>
//       <td>{element.gender}</td>
//       <td>{element.eyeColor}</td>
//       <td>{element.email}</td>
//       <td>{element.favoriteFruit}</td>
//     </tr>
//   ));
// }, [table]);
