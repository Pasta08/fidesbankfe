import "./Styles/App.css";
import Home from "./pages/Home";
import OperatorLogIn from "./pages/OperatorLogIn";
import UserLogIn from "./pages/UserLogIn";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/operatorlogin" element={<OperatorLogIn />} />
        <Route path="/userlogin" element={<UserLogIn />} />
      </Routes>
    </div>
  );
};

export default App;
