import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <header>
        <Link className="link" to="/">
          shopping cart
        </Link>
      </header>
      <div className="links">
        <Link className="link" to="/">
          home
        </Link>
        <Link className="link" to="/orders">
          Orders
        </Link>
      </div>
    </div>
  );
};

export default Header;
