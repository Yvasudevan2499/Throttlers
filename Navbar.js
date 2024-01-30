
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Images/throttlersLogo.png'; 
import './navbar.css'; // You can rename your CSS file to Navbar.css

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Throttlers Logo" style={{ height: '110px' }} />
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Throttlers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About Throttlers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
