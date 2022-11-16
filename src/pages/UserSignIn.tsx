import React, { useState } from "react";

const UserSignIn = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });

  return (
    <div>
      <form className="form" autoComplete="off">
        <input
          type="text"
          className="form--username"
          placeholder="Username"
          name="Username"
          onChange={handleChange}
          value={formData.Username}
        />
        <input
          type="password"
          className="form--password"
          placeholder="Password"
          name="Password"
          onChange={handleChange}
          value={formData.Password}
        />
        <input
          type="password"
          className="form--password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />

        <button className="login--button" onClick={onSubmit}>
          {" "}
          <FontAwesomeIcon icon={faCheck} className="check" />
        </button>
        <div className="form--check">
          <input
            type="checkbox"
            id="toRemember"
            checked={formData.toRemember}
            onChange={handleChange}
            name="toRemember"
          />
          <label htmlFor="toRemember">Sign Up to news letter?</label>
        </div>
      </form>
    </div>
  );
};

export default UserSignIn;
