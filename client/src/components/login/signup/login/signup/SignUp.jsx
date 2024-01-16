import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import {getDatabase ,ref,set} from 'firebase/database';
import {getAuth,createUserWithEmailAndPassword} from'firebase/auth';
import {app} from '../../../../FirebaseConfig';
const database = getDatabase(app);
const auth=getAuth(app);
export default function SignUp() {
  const userAuth=(e)=>{
    e.preventDefault();
    const uname=(e.target.uname.value);
    const email=e.target.email.value;
    const pass=e.target.pass.value;
    const phone=e.target.phone.value;
    const dob=e.target.dob.value;
     createUserWithEmailAndPassword(auth,email,pass)
     .then((credentials)=>{
      alert('Succesfully signed up as ' + uname);
      set(ref(database,"users/" + uname) ,{
        UserName: uname,
        email:email,
        PhoneNo:phone,
        DOB:dob,
      })
     })
     .catch((message)=>{
        alert(message);
     })
  }
  return (
    <div className="bodysignup">
      <h2 className="heading">REGISTRATION</h2>
      <form action="/" onSubmit={(e)=>userAuth(e)}>
        <div className="container">
          {/* <div className="pt1">
            
        </div> */}
          <div className="pt2">
            <div className="row">
              <input
                type="text"
                id="name"
                name="uname"
                placeholder="Full Name"
              />
            </div>
            <div className="row">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="row">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </div>
            <div className="row">
              <input
                type="date"
                placeholder="MM/DD/YYYY"
                name="dob"
                onfocus="(this.type='date')"
              />
            </div>
            <div className="row">
              <input
                type="password"
                id="password"
                name="pass"
                placeholder="Password"
              />
            </div>
            <button type="submit">SignUp</button>
            <div className="row">
              <span id="t1">
                Already a user? <Link to="/login"> Login here!</Link>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
