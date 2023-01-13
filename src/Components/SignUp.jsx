import React from "react";
import Header from "./Header";
import Signupstyle from "./Signup.module.css";


export default function SignUp() {
  return (
    <div className={Signupstyle.Signup}>
        <form>
        <input type="text" name="first_name" placeholder="Name" required />
      <br/>
      <br/>
        <input type="text" name="Email" placeholder="Email Address" required />
      <br/>
      <br/>
      <input type="password" name="password"  placeholder="Password" required />
      <br/>
      <div className={ Signupstyle.checkbox}>
     <input type="checkbox" name="checkbox"  required /> 
     <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>
     </div>
      <br/>
      <br/>

    <button className={Signupstyle.button_common} type="submit">Register</button>
            </form>
    </div>
  );
}
