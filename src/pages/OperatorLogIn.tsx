import React from "react";
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

export default OperatorLogIn;
