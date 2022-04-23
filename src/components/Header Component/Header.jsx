import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <header>
        <Link className="link" to="/React-Shopping-Cart">
          shopping cart
        </Link>
      </header>
      <div className="links">
        <Link className="link" to="/React-Shopping-Cart">
          home
        </Link>
        <Link className="link" to="/React-Shopping-Cart/orders">
          Orders
        </Link>
      </div>
    </div>
  );
};

export default Header;
