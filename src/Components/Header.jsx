import React from "react";
import { Link } from "react-router-dom";
import loginstyle from "./Login.module.css";

export default function Header() {
  return (
    <>
    <h1>React Form </h1>
    <div style={{ display: "flex",textAlign:"center", marginLeft:"390px", gap:"250px"}}>
      <Link to="/"><h3>Login</h3></Link>
      <Link to="/SignUp"><h3>Sign Up</h3></Link>
    </div>
    </>
  );
}
