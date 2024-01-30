import React from 'react';
import{ images } from '../../constants';

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
   <div className="app__wrapper_info">
    <SubHeading title="Chase the new flavor" />
    <h1 className="app__header-h1">The Key to Fine Dining</h1>
    <p className="p__opensans" style={{margin: '2rem 0'}}> Indulge your taste buds in a symphony of flavors at our culinary haven, where each dish is a masterpiece crafted with passion and precision – a feast for the senses awaits at Gericht Restuarant</p>
    <button type="button" className="custom__button">Explore Menu</button>
   </div>
   <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
   </div>
   </div>
);

export default Header;
