import Layout from "../components/common/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div>
        <h1>Fides Bank</h1>
        <div className="btn_section">
          <Link to="/operatorsignin">Operator SignIn</Link>
          <Link to="/usersignin">User SignIn</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
