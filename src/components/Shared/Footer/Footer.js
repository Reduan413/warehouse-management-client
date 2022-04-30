import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
     <section className="footer ">
     <div className="box-container container">
       <div className="box">
         <h3><i className="fa fa-university"></i>SM-Academy</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         <div className="share">
           <Link to="#" className="fa fa-facebook-f"></Link>
           <Link to="#" className="fa fa-twitter"></Link>
           <Link to="#" className="fa fa-instagram"></Link>
           <Link to="#" className="fa fa-linkedin"></Link>
         </div>
       </div>
       <div className="box">
         <h3>useful links</h3>
         <Link to="#" className="link">help center</Link>
         <Link to="#" className="link">ask questions</Link>
         <Link to="#" className="link">send feedback</Link>
         <Link to="#" className="link">private policy</Link>
         <Link to="#" className="link">terms of use</Link>
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
       create by <span>mr. web designer</span> | all rights reserved! |  <p>copyright @ {year}</p>
     </div>
   </section>
  );
};

export default Footer;
