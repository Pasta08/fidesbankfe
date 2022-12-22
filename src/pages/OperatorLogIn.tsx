/* import React from "react";
import { useEffect } from "react";

const OperatorLogIn = () => {
  const fetchUserData = async () => {
    fetch("http://localhost:8080/springbank/funziona")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  fetchUserData();
  return <div>OperatorLogIn</div>;
};

export default OperatorLogIn; */
import React, { useState } from "react";
import { Form } from "react-router-dom";

const UserLogIn = () => {
  const [UserLogin] = useState({
    email: "",
    password: "",
  });

  return (
    <form>
      <label>
        <p>username</p>
        <input type={"username"} />
      </label>
      <label>
        <p>password</p>
        <input type={"password"} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default UserLogIn;
