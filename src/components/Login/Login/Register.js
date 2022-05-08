import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  let errorElement;
  const [token] = useToken(user);

  const navigateLogin = () => {
    navigate("/login");
  };

  if(loading || updating){
    return <Loading />
  }

  if(token){
    navigate("/");
  }
  if(error){
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    )
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password === confirmPassword) {
      console.log(name, email, password);
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      alert("Upsated profile");
    }
  };
  return (
    <div className="accout-form">
      <h3>register now</h3>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          className="box"
        />
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          className="box"
        />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          className="box"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm your password"
          className="box"
        />

        <input type="submit" value="register now" className="btn" />
      </form>
      {errorElement}
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-decoration-none pe-auto"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
