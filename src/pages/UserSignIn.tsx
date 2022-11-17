import React, { useState } from "react";
import type { FormEvent } from "react";
import "../Styles/UserSignIn.css";
const UserSignIn = () => {
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
    await fetch("http://localhost:8080/usersignin", {
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

  return (
    <div className="form_page">
      <div className="form_image"></div>
      <form className="form" autoComplete="off" onSubmit={sendForm}>
        <h1 className="form_title">User SignIn</h1>
        <input
          type="text"
          className="input "
          placeholder="Firstname"
          name="firstname"
        />

        <input
          type="text"
          className="input "
          placeholder="Lastname"
          name="lastname"
        />

        <input
          type="text"
          className="input "
          placeholder="Address"
          name="address"
        />

        <input
          type="text"
          className="input "
          placeholder="Email"
          name="email"
        />

        <input
          type="password"
          className="input "
          placeholder="Password"
          name="password"
        />

        <input type="date" className="input " name="dateofbirth" />

        <button className="login--button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default UserSignIn;
