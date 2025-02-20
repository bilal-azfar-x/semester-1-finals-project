import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
import './Navbar.css';

function Navbar () {
    return (
        <div className="main-navbar-div">
            <p style={{fontFamily: "Poppins-SemiBold", fontSize: 20}}>GuTech Exam Store</p>
            <ul className="right-div">
                <li className="navbar-links"><Link to="/">Home</Link></li>
                <li className="navbar-links"><Link to="/cart">Cart</Link></li>
            </ul>
            
        </div>
    );
}

export default Navbar;