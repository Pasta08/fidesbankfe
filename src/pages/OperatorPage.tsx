import { useState, useEffect } from "react";

const OperatorPage = () => {
	const [allUserData, setAllUserData] = useState({});

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

	useEffect(() => fetchUserData, []);
	console.log(allUserData);

	return <div>OperatorPage</div>;
};

export default OperatorPage;
