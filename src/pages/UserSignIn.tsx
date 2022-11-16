import React, { useState } from "react";

const UserSignIn = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });

  function handleChange(event: any) {
    const { name, value } = event.target;
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
      console.log(formData);
    });
  }

  function onSubmit(event: any) {
    event.prevenDefault();
    console.log(formData);
  }

  return (
    <div>
      <form className="form" autoComplete="off">
        <input
          type="text"
          className="form--firstname"
          placeholder="Firstname"
          name="Firstname"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type="text"
          className="form--lastname"
          placeholder="Lastname"
          name="Lastname"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          type="text"
          className="form--address"
          placeholder="Address"
          name="Address"
          onChange={handleChange}
          value={formData.address}
        />
        <input
          type="text"
          className="form--email"
          placeholder="Email"
          name="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          className="form--password"
          placeholder="Password"
          name="Password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="date"
          className="form--dateofbirth"
          name="Dateofbirth"
          onChange={handleChange}
          value={formData.dateOfBirth}
        />

        <button className="login--button" onClick={onSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default UserSignIn;
