import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import "../Styles/UserLogin.css";
import "../components/Navbar";

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
				console.log("Success:", data);
			})
			.then((error) => {
				console.log("Error", error);
			});
	};

	return (
		<body>
            <section>
				<form onSubmit={sendForm}>
			<div className="App">
			<div className="container-md">
				<h2>Login Page</h2>
			<label >
			<h3 className="row-container">Email</h3>
			<input
				type="email"
				className="input"
				placeholder="email"
				name="email"
				onChange={(e) => updateUser("email", e.target.value)}
			/></label></div>
            <div  className="container-md">
				<label>
			  <h3>Password</h3>
			<input
				type="password"
				className="input"
				placeholder="password"
				name="password"
				onChange={(e) => updateUser("password", e.target.value)}
			/></label> </div>
			<div>
				<button className='btn_form' type="submit">Submit</button>
				<p className="forgot-password text-right">
				Forgot <a href="#">Password</a>
			</p>
			<p>Not Registered ?<Link  to="/usersignin">Create account Now!</Link></p>
			</div>
			</div>
			</form>
			</section>
           </body>		
	);
};
export default UserLogIn;
