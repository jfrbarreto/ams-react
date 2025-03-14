import { useCallback, useState } from "react";

import { Button } from "@mantine/core";
import { useFetch } from "./useFetch";

export function ReactHooks() {
	const [url, setUrl] = useState("service1.json");
	// const [count, setCount] = useState(0);

	// const mOptions = useMemo(() => ({ url }), [url]);

	const mOnSuccess = useCallback((r: string) => {
		console.log(r);
	}, []);

	const { data } = useFetch({ url, onSuccess: mOnSuccess }); // onSuccess: () => console.log("success")

	console.log("APP RENDER", url);

	return (
		<div>
			{/* <div>Count: {count}</div> */}
			<div>{JSON.stringify(data)}</div>
			<div>
				<Button variant="outline" onClick={() => setUrl("service1.json")}>
					Service 1
				</Button>

				<Button variant="light" onClick={() => setUrl("service2.json")}>
					Service 2
				</Button>
				<Button
					variant="white"
					// onClick={() => setCount((oldState) => oldState + 1)}
				>
					Count
				</Button>
			</div>
		</div>
	);
}
