import React, { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import type { FormEvent } from "react";
import "../Styles/UserSignIn.css";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
const UserSignIn = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    password: "",
    dateofbirth: "",
  });

  const updateUser = (key: string, value: any) => {
    setUser({ ...user, [key]: value });
  };

  const sendForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { firstname, lastname, address, email, password, dateofbirth } =
      event.target as typeof event.target & {
        firstname: { value: string };
        lastname: { value: string };
        address: { value: string };
        email: { value: string };
        password: { value: string };
        dateofbirth: { value: Date };
      };
    await fetch("http://localhost:8080/springbank/usersignin", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        firstname: firstname.value,
        lastname: lastname.value,
        address: address.value,
        email: email.value,
        password: password.value,
        dateofbirth: dateofbirth.value,
      }),
    });
  };
  const [showPassword, setShowPassword] = useState(true);

  const hideshowPassword = () => {
    setShowPassword((prevState) => !prevState);
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
          name="firstname"
          onChange={(e) => updateUser("firstname", e.target.value)}
        />

        <input
          type="text"
          className="input "
          placeholder="Lastname"
          name="lastname"
          onChange={(e) => updateUser("lastname", e.target.value)}
        />

        <input
          type="text"
          className="input "
          placeholder="Address"
          name="address"
          onChange={(e) => updateUser("address", e.target.value)}
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
        <button className="password_show_btn" onClick={hideshowPassword}>
          {showPassword ? <AiFillEye /> : <AiOutlineEyeInvisible />}
        </button>

        <input type="date" className="input " name="dateofbirth" />

        <button className="form_submit_btn" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default UserSignIn;
