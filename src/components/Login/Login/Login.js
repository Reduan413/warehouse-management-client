import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef("");
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, reseterror] =
    useSendPasswordResetEmail(auth);
  let errorElement;
  let from = location.state?.from?.pathname || "/";
  const [token] = useToken(user);
  const navigateRegister = (e) => {
    navigate("/register");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async (e) => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      // toast("Sent Email");
    } else {
      // toast("Please Enter your email address");
      alert("Please Enter your email address");
    }
  };

  if (token) {
    navigate(from, { replace: true });
  }
  if (loading || sending) {
    return <Loading />;
  }
  if (error || reseterror) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  return (
    <div className="accout-form">
      <h3>login now</h3>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          ref={emailRef}
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
          <Link to="" onClick={resetPassword}>
            forgot password
          </Link>
        </div>
        {errorElement}
        <input type="submit" value="login now" className="btn" />
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
