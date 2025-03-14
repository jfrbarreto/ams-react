import { createUseStyles } from "react-jss";

const divStyles = createUseStyles({
	exampleDiv: {
		margin: "60px 60px",
		height: "100px",
		width: "100px",
		border: "1px solid blue",
	},
});

export function JssBased() {
	const styling = divStyles();

	return <div className={styling.exampleDiv}>REACT</div>;
}
