import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p className="navbar-brand">Herald Online</p>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className="nav-link "
              tabIndex="-1"
              aria-disabled="true"
            >
              SignUp
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className="nav-link "
              tabIndex="-1"
              aria-disabled="true"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
