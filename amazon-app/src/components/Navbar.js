import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { Search, ShoppingBasket, Room } from '@material-ui/icons';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

const Navbar = () => {
  const [{ cart, user }] = useStateValue();

  const goToLogin = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="navbar-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="navbar-location">
        <Room className="navbar-room-icon" />
        <div className="navbar-address">
          <span className="navbar-hello-text">Hello</span>
          <strong>Select your address</strong>
        </div>
      </div>

      <div className="navbar-search">
        <input type="text" className="navbar-search-input" />
        <Search className="navbar-search-icon" />
      </div>
      <div className="navbar-options">
        <Link to={!user && '/login'} className="navbar-link">
          <div onClick={goToLogin} className="navbar-option">
            <span className="navbar-option-one">Hello {user?.email}</span>
            <span className="navbar-option-two">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <Link to="/" className="navbar-link">
          <div className="navbar-option">
            <span className="navbar-option-one">Returns</span>
            <span className="navbar-option-two">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="navbar-link">
          <div className="navbar-option">
            <span className="navbar-option-one">Your</span>
            <span className="navbar-option-two">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="navbar-link">
          <div className="navbar-basket">
            <div>
              <ShoppingBasket />
              <span className="basket-count">{cart?.length}</span>
            </div>
            <div>
              <span className="navbar-option-two cart">Cart</span>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
