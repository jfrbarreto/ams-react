import { Table as MantineTable } from "@mantine/core";
import type { ReactNode } from "react";
import * as jsonTable from "../../mock_table/table_10000.json";
import type { TableItems } from "../../types";

export const Table = () => {
	const table = JSON.parse(JSON.stringify(jsonTable)).default;

	function rows(): ReactNode {
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
	}

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
				<tbody>{rows()}</tbody>
			</MantineTable>
		</>
	);
};
