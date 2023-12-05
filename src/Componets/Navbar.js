import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';

const Navbar = () => {
  return (
    <header>
      <Link to="/" className="logo">
        Portfo<span style={{ color: "red" }}>.lio</span>
      </Link>
      <nav className="navbar ">
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/project">Projects</Link>
        <Link to="/service">Service</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Me</Link>
      </nav>
    </header>
  );
};

export default Navbar;
