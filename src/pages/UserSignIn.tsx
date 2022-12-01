import React, { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import "../Styles/UserSignIn.css";
import { Link } from "react-router-dom";
const UserSignIn = () => {
	const [user, setUser] = useState({
		nome: "",
		cognome: "",
		indirizzo: "",
		email: "",
		password: "",
		dataDiNascita: "",
	});

	const updateUser = (key: string, value: any) => {
		setUser({ ...user, [key]: value });
		console.log(user);
	};

	const sendForm = async (event: any) => {
		event.preventDefault();
		fetch(
			"http://localhost:8080/springbank/api/v1/registration/bank-user",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			}
		)
			.then((response) => response.json())
			.then((data) => {
				try {
					console.log("Success:", data);
				} catch (error) {
					console.log("Error: " + error);
				}
			});
	};
	const [showPassword, setShowPassword] = useState(false);

	const hideshowPassword = (e: any) => {
		setShowPassword((prevState) => !prevState);
		e.preventDefault();
	};

	return (
		<div className="form_page">
			<div className="form_image">
				<h1>WELCOME</h1>
				<img src="/images/HousingAffordability.svg" alt="image" />
				<Link to="/" className="return_btn">
					<FaArrowLeft />
				</Link>
			</div>
			<form className="form" autoComplete="off" onSubmit={sendForm}>
				<h1 className="form_title">User SignIn</h1>
				<input
					type="text"
					className="input "
					placeholder="Firstname"
					name="firstName"
					onChange={(e) => updateUser("nome", e.target.value)}
				/>

				<input
					type="text"
					className="input "
					placeholder="Lastname"
					name="lastName"
					onChange={(e) => updateUser("cognome", e.target.value)}
				/>

				<input
					type="text"
					className="input "
					placeholder="Address"
					name="address"
					onChange={(e) => updateUser("indirizzo", e.target.value)}
				/>

				<input
					type="email"
					className="input email"
					placeholder="Email"
					name="email"
					onChange={(e) => updateUser("email", e.target.value)}
				/>

				<input
					type={showPassword ? "text" : "password"}
					className="input "
					placeholder="Password"
					name="password"
					onChange={(e) => updateUser("password", e.target.value)}
				/>
				<button
					className="password_show_btn"
					onClick={hideshowPassword}
				>
					{showPassword ? <AiFillEye /> : <AiOutlineEyeInvisible />}
				</button>

				<input
					type="date"
					className="input "
					name="dateOfBirth"
					onChange={(e) =>
						updateUser("dataDiNascita", e.target.value)
					}
				/>

				<button className="form_submit_btn" type="submit">
					Sign up
				</button>
			</form>
		</div>
	);
};

export default UserSignIn;
