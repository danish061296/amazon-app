import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-one">
        <div className="footer-one-headings">
          <div className="footer-info">
            <strong className="footer-headings">Get to Know Us</strong>
            <div className="footer-sub-headings">
              <p>Career</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="footer-info">
            <strong className="footer-headings">Make Money with Us</strong>
            <div className="footer-sub-headings">
              <p>Sell products on Amazon</p>
              <p>Sell apps on Amazon</p>
            </div>
          </div>
          <div className="footer-info">
            <strong className="footer-headings">Amazon Payment Products</strong>
            <div className="footer-sub-headings">
              <p>Amazon Rewards Visa</p>
              <p>Amazon.com Store Card</p>
            </div>
          </div>
          <div className="footer-info">
            <strong className="footer-headings">Let Us Help You</strong>
            <div className="footer-sub-headings">
              <p>Amazon and COVID-19</p>
              <p>Your Account</p>
              <p>Your Orders</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-two">
        <Link to="/">
          <img
            className="navbar-logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        <button className="footer-two-button">English</button>
        <button className="footer-two-button">United States</button>
      </div>
    </div>
  );
};

export default Footer;
