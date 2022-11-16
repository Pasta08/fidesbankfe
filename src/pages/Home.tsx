import Layout from "../components/common/Layout";
import "../Styles/Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div>
        <h1>Fides Bank motafaka</h1>
        <div className="btn_section">
          <Link to="/operatorlogin" className="btns">
            Operator LogIn
          </Link>
          <Link to="/userlogin" className="btns">
            User LogIn
          </Link>
        </div>
        <Link to="/usersignin">Register</Link>
      </div>
    </Layout>
  );
};

export default Home;
