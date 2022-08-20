import React from "react"
import './Navbar.css'
import logo1 from './logo1.png';
 


const NavBar = () => {
    return (
      <ul className="list">
        <li> <img style={{width: "30%"}} src={logo1} alt="Logo" /></li>
        <li className="items">Home</li>
        <li className="items">About Us</li>
        <li className="items">Services</li>
        <li className="items">Contact</li>
      </ul>
      
    )
}

export default NavBar;