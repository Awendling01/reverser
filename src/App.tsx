/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";

const App = () => {
	const [userInput, setUserInput] = useState("");
	const [reverseOutput, setReverseOutput] = useState("");

	const onUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setUserInput(value);
		setReverseOutput(value.split("").reverse().join(""));
	};

	return (
		<Layout>
			<form>
				<StyledInput value={userInput} onChange={onUserInputChange} />
			</form>
			<div>{reverseOutput}</div>
		</Layout>
	);
};

export default App;

const Layout: React.FC = ({ children }) => {
	return (
		<div
			sx={{
				height: "100vh",
				width: "100vw",
				background: "lightgray",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			{children}
		</div>
	);
};

const StyledInput: React.FC<{
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, onChange }) => {
	return (
		<input
			sx={{ boxShadow: "10px 5px 5px #0004" }}
			value={value}
			onChange={onChange}
		/>
	);
};
