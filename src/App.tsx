import "./App.css";
import Home from "./pages/Home";
import OperatorSignIn from "./pages/OperatorSignIn";
import UserSignIn from "./pages/UserSignIn";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/operatorsignin" element={<OperatorSignIn />} />
        <Route path="/usersignin" element={<UserSignIn />} />
      </Routes>
    </div>
  );
};

export default App;
