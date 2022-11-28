import "./Styles/App.css";
import Home from "./pages/Home";
import OperatorLogIn from "./pages/OperatorLogIn";
import UserLogIn from "./pages/UserLogIn";
import UserSignIn from "./pages/UserSignIn";
import OperatorPage from "./pages/OperatorPage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/operatorlogin" element={<OperatorLogIn />} />
				<Route path="/userlogin" element={<UserLogIn />} />
				<Route path="/usersignin" element={<UserSignIn />} />
				<Route
					path="/bank-operator-home-page"
					element={<OperatorPage />}
				/>
			</Routes>
		</div>
	);
};

export default App;
