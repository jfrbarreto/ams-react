import { Table as MantineTable } from "@mantine/core";
import React, { type FC, type ReactNode } from "react";

interface TableProps {
	rows: ReactNode;
}

export const Table: FC<TableProps> = (props) => {
	const { rows } = props;
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
