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
        <p>email</p>
        <input type={"email"} />
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
