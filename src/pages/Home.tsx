import Layout from "../components/common/Layout";
import "../Styles/Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<Layout>
			<div className="container">
				<div className="landing-image">
					<img src="/images/TransactionalSms.svg" alt="image" />
				</div>
				<div className="landing">
					<h1>Fides Bank</h1>
					<div className="btns_section">
						<Link to="/operatorlogin" className="btns">
							OperatorLogIn
						</Link>
						<Link to="/userlogin" className="btns">
							UserLogIn
						</Link>
					</div>
					<span>
						Don't have an account?
						<Link to="/usersignin" className="btns">
							SignUp
						</Link>
					</span>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
