import React from "react";
import { PureComponent } from "react";

import logo from "../assets/img/logo-white.png"
import CopyRight from "../assets/img/copyright.svg"
import Twitter from "../assets/img/twitter.png"
import Facebook from "../assets/img/facebook.png"
import Instagram from "../assets/img/instagram.png"

const Footer = () => {
        return (
            <div className="footer">
                <div className="footer__logo">
                    <img src={logo}/>
                </div>
                <div className="footer__links">
                    <div className="footer__links--1">
                        <h3>Company</h3>
                        <ul>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                    <div className="footer__links--2">
                        <h3>Support</h3>
                        <ul>
                            <li>Help Center</li>
                            <li>Trust & Safety</li>
                            <li>Accessibility</li>
                            <li>Community Guidelines</li>
                            <li>Referrals</li>
                        </ul>
                    </div>
                    <div className="footer__links--3">
                        <h3>Discover</h3>
                        <ul>      
                            <li>Trust & Safety</li>
                            <li>Accessibility</li>
                            <li>Community Guidelines</li>
                            <li>Referrals</li>
                        </ul>
                    </div>

                </div>

                <div className="footer__copy">
                    <div className="footer__copy--1">
                        <img src={CopyRight}/>
                        <p>2021 Metabnb</p>
                </div>
        );

      </div>

      <div className="footer__social">
          <img src={Twitter}/>
          <img src={Facebook}/>
          <img src={Instagram}/>
      </div>
    </div>
  );
}

export default Footer;