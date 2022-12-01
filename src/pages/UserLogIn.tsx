import React, { useState } from "react";
import { Form } from "react-router-dom";

const UserLogIn = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const updateUser = (key: string, value: any) => {
		setUser({ ...user, [key]: value });
		console.log(user);
	};

	const sendForm = async (event: any) => {
		event.preventDefault();
		fetch("http://localhost:8080/springbank/api/v1/login/bank-user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				mode: "no-cors",
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((data) => {
				sessionStorage.setItem("user", data.accessToken);
				console.log(sessionStorage.getItem("user"));
			})
			.then((error) => {
				console.log("Error", error);
			});
	};

	return (
		<form onSubmit={sendForm}>
			<input
				type="email"
				className="input"
				placeholder="email"
				name="email"
				onChange={(e) => updateUser("email", e.target.value)}
			/>
			<input
				type="password"
				className="input"
				placeholder="password"
				name="password"
				onChange={(e) => updateUser("password", e.target.value)}
			/>
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};
export default UserLogIn;
