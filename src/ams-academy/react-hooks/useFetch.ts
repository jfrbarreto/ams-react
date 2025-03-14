import { useEffect, useState } from "react";

interface Options {
	url: string;
	onSuccess?: (response: string) => void;
}

export const useFetch = (options: Options) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		console.log("EFFECT RENDER");
		fetch(options.url)
			.then((response) => response.json())
			.then((json) => {
				setTimeout(() => {
					options.onSuccess?.("timeout success");
				}, 5000);

				// options.onSuccess?.("--- success ----");

				setData(json);
			});
		// return () => clearTimeout(timer);
	}, [options.url, options.onSuccess]);

	console.log("FETCH RENDER");

	return {
		data,
	};
};
