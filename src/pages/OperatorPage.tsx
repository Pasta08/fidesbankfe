import { useState, useEffect } from "react";
import Layout from "../components/common/Layout";

const OperatorPage = () => {
	const [allUserData, setAllUserData] = useState([]);

	const fetchUserData = () => {
		let url: string =
			"http://localhost:8080/springbank/api/v1/bank-operator/get-users";
		fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				mode: "no-cors",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => setAllUserData(data));
	};

	const users = allUserData.map((user: any) => {
		return (
			<div key={user.idUser}>
				<span> {user.firstName}</span>
				<span> {user.lastName}</span>
				<span> {user.email} </span>
				<span> {user.idUser}</span>
			</div>
		);
	});

	useEffect(() => fetchUserData, []);
	console.log(allUserData);

	return (
		<Layout>
			<div>{users}</div>
		</Layout>
	);
};

export default OperatorPage;
