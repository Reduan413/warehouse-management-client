import React from "react";
import facebook from "../../../image/facebook.png";
import github from "../../../image/github.png";
import google from "../../../image/GoogleLogo.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px",backgroundColor:"#0eb582" }} className=" w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px",backgroundColor:"#0eb582" }} className=" w-50"></div>
      </div>
      <div>
        <button
          className="btn btn-info w-75 d-block mx-auto my-2"
        >
          <img
            style={{ width: "30px", marginRight: "10px" }}
            src={google}
            alt=""
          />
          <span className="px-2">Google Sign In</span>
        </button>
        
      </div>
    </div>
  );
};

export default SocialLogin;
