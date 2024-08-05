import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo_SoC.png";

import FooterCredits from "./FooterCredits";

function Footer() {

 

  return (
    <div className="footer-section">
      
      <div className="footer-container">

        <div className="ft-link-base ft-brand">
          <img src={Logo} className="brand-logo" alt="SoC Logo"/>
          <h2>Squad of Creators</h2>
        </div>

        <div className="ft-link-base ft-company">
          <h2>Company</h2>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Join Us</a></li>
            <li><a href="">Our Team</a></li>
            <li><a href="">Blog</a></li>
          </ul>
        </div>

        <div className="ft-link-base ft-support">
          <h2>Support</h2>
          <ul>
            <li> <a href="">Services</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Help Desk</a></li>
          </ul>
        </div>

        <div className="ft-link-base ft-newsletter">
          <div>
            <h3>Subscribe to our newsletter</h3>
            <p>For product announcements and exclusive insights</p>
          </div>
          <div>

          <div className="input-base">
            <input
              placeholder="Email Id"
              name="email-Id"
              className="email-input"
            />
            <button type="button" className="subscribe_btn">Subscribe</button>
          </div>
          </div>
        </div>

      </div>

      <FooterCredits />
      
    </div>
  );
}

export default Footer;
