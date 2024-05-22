import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Design is not just what it looks like and feels like. Design is how it works.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            For further query contact us , Thankyou.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">SHOPPER</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved by @ Hitesh
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
