import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../image/logo.png";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <section className="footer ">
      <div className="box-container container">
        <div className="box">
          <img height={60} src={logo} alt="" />
          <p>
            Technology has become a part of our daily lives and for a huge
            portion of our life, we are dependent on tech products daily. There
            is hardly a home in Bangladesh without a tech product.{" "}
          </p>
        </div>
        <div className="box">
          <h3>useful links</h3>
          <Link to="#" className="link">
            help center
          </Link>
          <Link to="#" className="link">
            ask questions
          </Link>
          <Link to="#" className="link">
            send feedback
          </Link>
          <Link to="#" className="link">
            private policy
          </Link>
          <Link to="#" className="link">
            terms of use
          </Link>
        </div>

        <div className="box">
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <form action="">
            <input
              type="email"
              name=""
              placeholder="enter your email"
              id=""
              className="email"
            />
            <input type="submit" value="subscribe" className="btn" />
          </form>
        </div>
      </div>
      <div className="credit">
        ......... <span>............</span> | all rights reserved! |{" "}
        <p>copyright @ {year}</p>
      </div>
    </section>
  );
};

export default Footer;
