import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="bodysignup">
    <form action="/">
      <h1 className="heading">LOGIN INTO ACCOUNT</h1>
      <div className="container">
        <div className="pt2">
          <div className="row">
            <input type="email" id="email" placeholder="example@mail.com" />
          </div>
          <div className="row">
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button>LogIn</button>
          <div className="row">
            <span id="t1">
              New user? <Link to="/signup"> SignUp here!</Link>
            </span>
          </div>
        </div>
      </div>
    </form>
    </div>
  );
}
