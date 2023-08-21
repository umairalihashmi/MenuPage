import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your Navbar CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Restaurant</Link>
      </div>
      <div className="nav-links">
        <Link to="/menu">Menu</Link>
        <Link to="/login-signup">Login/Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
