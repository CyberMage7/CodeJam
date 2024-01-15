import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div>
        <h2 className='heading'>REGISTRATION</h2>
    <form action="" method="post">
    <div className="container">
        <div className="pt1">
            
        </div>
        <div className="pt2">
            <div className="row">
                <input type="text" id="name" name="uname" placeholder="Full Name"/>
            </div>
            <div className="row">
                <input type="text" id="phone" name="phone" placeholder="Phone Number"/>
            </div>
            <div className="row">
                <input type="text" placeholder="MM/DD/YYYY" name="dob" onfocus="(this.type='date')"/>
            </div>
            <div className="row">
                <input type="password" id="password" name="pass" placeholder="Password"/>
            </div>
            <button type="submit">SignUp</button>
            <div classNameName="row">
                <span id="t1">Already a user?<Link to="/login"> Login here!</Link></span>
            </div>
        </div>
    </div>
 </form>
 </div>
)
}
