import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const navigateRegister = (e) => {
    navigate("/register");
  };
  return (
    <div className="accout-form">
      <form className="login-form">
        <h3>login now</h3>
        <input type="email" placeholder="enter your email" className="box" />
        <input
          type="password"
          placeholder="enter your password"
          className="box"
        />
        <div className="flex">
          <p>
            New to Genius Car?{" "}
            <Link
              to="/register"
              className=" text-decoration-none pe-auto"
              onClick={navigateRegister}
            >
              Please Register
            </Link>
          </p>
          <Link to="">forgot password</Link>
        </div>
        <input type="submit" value="login now" className="btn" />
      </form>
      <SocialLogin/>
    </div>
  );
};

export default Login;
