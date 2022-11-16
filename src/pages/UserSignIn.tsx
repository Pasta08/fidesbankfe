import React, { useState } from "react";
import type { FormEvent } from "react";
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
    await fetch("/usersignin", {
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
    <div>
      <form className="form" autoComplete="off">
        <input
          type="text"
          className="form--firstname"
          placeholder="Firstname"
          name="firstname"
        />
        <input
          type="text"
          className="form--lastname"
          placeholder="Lastname"
          name="lastname"
        />
        <input
          type="text"
          className="form--address"
          placeholder="Address"
          name="address"
        />
        <input
          type="text"
          className="form--email"
          placeholder="Email"
          name="email"
        />
        <input
          type="password"
          className="form--password"
          placeholder="Password"
          name="password"
        />
        <input type="date" className="form--dateofbirth" name="dateofbirth" />

        <button className="login--button">submit</button>
      </form>
    </div>
  );
};

export default UserSignIn;
