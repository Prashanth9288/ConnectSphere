import { Link } from "react-router-dom";
import React from "react";
export default function Header(){
  return(
    <nav className="navbar">
      <header className="header">
      <h1>ConnectSphere</h1>
      <div>
      
        <Link  to='/'>Home</Link>
        <Link  to='/following'>Following</Link>
    
      </div>
    </header>
    </nav>
    
  )
}