import "./Styles/App.css";
import Home from "./pages/Home";
import OperatorLogIn from "./pages/OperatorLogIn";
import UserLogIn from "./pages/UserLogIn";
import UserSignIn from "./pages/UserSignIn";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/operatorlogin" element={<OperatorLogIn />} />
        <Route path="/userlogin" element={<UserLogIn />} />
        <Route path="/usersignin" element={<UserSignIn />} />
      </Routes>
    </div>
  );
};

export default App;
