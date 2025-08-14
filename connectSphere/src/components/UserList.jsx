
import React from "react";
import UserCard from "./UserCard";


export default function Navbar(){
  return(
    <nav className="navbar">
      <h1>ConnectSphere</h1>
      <div>
        <Link to="/" >Home</Link>
        <Link to="/following">Following</Link>
      </div>
    </nav>
  )
}