import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="#">Logo</a>
        <ul className="navbar-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
