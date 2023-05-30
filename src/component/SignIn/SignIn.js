import React, { useState } from 'react';
import './SignIn.css';
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
//import { IoMdClose } from "react-icons/io";
import {useNavigate} from 'react-router';

function SignIn(){
  const navigate = useNavigate();
  
  const[phone,setPhone]=useState("");
  const[Password,setPassword]=useState("");
  const phoneRegex=/^[7-9]\d{9}$/;
  const PasswordRegex=/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const handlePhonechange= (event)=>{
    setPhone(event.target.value);
  };
  const handlePasswordchange= (event)=>{
    setPassword(event.target.value);
  };
  const handleSumbit= (event)=>{
    event.preventDefault();
 
  if(!phoneRegex.test(phone)){
    alert("enter valid phone number")
  } else if (!PasswordRegex.test(Password)){
    alert("enter valid password");
  } else{
    const userRegistrationdata=JSON.parse(
      localStorage.getItem("userRegistrationdata")
    );
    if(userRegistrationdata && userRegistrationdata.phone===phone){
      navigate("/home");
    } else {
      alert("user not registered")
    }
  }
};
    return(
        <div className="App">
        <div className="logo-box">
          <BsTwitter />
          <h2>Sign in to Twitter</h2>
          <button>
            <FcGoogle />
            Sign in with Google
          </button>
          <button>
            <AiFillApple />
            Sign in with Apple
          </button>
  
          <hr></hr>
          <span>Or</span>
          <form>
            <input
             type="text"
             name="phone"
              placeholder="phone or email "
              value={phone}
            onChange={handlePhonechange}
            />
            <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={Password}
            onChange={handlePasswordchange}
            />
            <button onClick={handleSumbit}>Next</button>
            </form>
         
          <button> Forget Password</button>
          <p>
            Don't Have an account
            <a onClick={()=>navigate("/signup")} href='#'>SignUp</a>
            </p>
        </div>
      </div>
    );
  };
  
  export default SignIn;
  
