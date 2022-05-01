import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import './Login.css'

const Register = () => {
  return (
    <div className="accout-form">
      <form  className="register-form">
        <h3>register now</h3>
        <input type="email" placeholder="enter your email" className="box" />
        <input type="password" placeholder="enter your password" className="box" />
        <input
          type="password"
          placeholder="confirm your password"
          className="box"
        />

        <input type="submit" value="register now" className="btn" />
      </form>
      <SocialLogin/>
    </div>
  );
};

export default Register;
