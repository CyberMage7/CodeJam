import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
// import {getDatabase} from 'firebase/database';
import {getAuth,signInWithEmailAndPassword} from'firebase/auth';
import {app} from '../../../../FirebaseConfig';
// const database = getDatabase(app);
const auth=getAuth(app);

export default function LogIn() {
  const userAuth=(e)=>{
    e.preventDefault();
      const email=e.target.email.value;
      const pass=e.target.pass.value;
      signInWithEmailAndPassword(auth,email,pass).then(()=>{
        alert("SuccessFully logged In");
      })
      .then((error)=>{
        alert(error);
      })
  }
  return (
    <div className="bodysignup">
    <form  onSubmit={(e)=>userAuth(e)}>
      <h1 className="heading">LOGIN INTO ACCOUNT</h1>
      <div className="container">
        <div className="pt2">
          <div className="row">
            <input type="email" id="email" name="email" placeholder="example@mail.com" />
          </div>
          <div className="row">
            <input type="password" id="password" name="pass" placeholder="Password" />
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