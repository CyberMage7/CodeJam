import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
export default function LogIn() {
  return (
    <div>
        <h1 className='heading'>LOGIN INTO ACCOUNT</h1>
    <div class="container">
        <div class="pt1">
            
        </div>
        <div class="pt2">
            <div class="row">
                <input type="text" id="phone" placeholder="Phone Number"/>
            </div>
            <div class="row">
                <input type="password" id="password" placeholder="Password"/>
            </div>
            <button>LogIn</button>
            <div class="row">
                <span id="t1">New user?<Link to="/signup"> SignUp here!</Link></span>
            </div>
        </div>
    </div>
    </div>
  )
}
