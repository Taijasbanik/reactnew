import React from 'react';

import {FooterOverlay, Newsletter} from '../../components';
import {FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
            <h1 className="app__footer-headtext">Contact Us</h1>
            <p className="p__opensans">AI Staff Colony, Mumbai,MAHARASHTRA- 400029</p>
            <p className="p__opensans">+91 77575-93753</p>
            <p className="p__opensans">+91 77535-36990</p>
      </div>
      <div className="app__footer-links_logos">
          <img src={images.gericht} alt="footer logo" />
          <p className="p__opensans">The best way to find yourself is to lose yourself in the service of others.</p>
          <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: 15}} />
          <div className="app__footer-links_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
          </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
            <p className="p__opensans">Monday - Friday</p>
            <p className="p__opensans">10:00am - 10:00pm</p>
            <p className="p__opensans">Saturday - Sunday</p>
            <p className="p__opensans">10:00am - 02:00pm</p>
      </div>
      
    </div>
      <div className="footer__copyrigth">
        <p className="p__opensans">2024 Gericht. All Rights Reserved.</p>
      </div>
  </div>
);

export default Footer;
