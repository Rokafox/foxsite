import React from 'react';
import './footer.css';
import { translate } from '../../utilities/translate';
import { useState } from 'react';

const Footer = () => {
  const [language] = useState(localStorage.getItem('language') || 'en');
  const year = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="footer">
      <div className="container">
        <p>@{year} Rokafox</p>
        <p>{translate('footer_msg1', language)}</p>
        <a href="mailto:mail@rokafox.quest">mail@rokafox.quest</a>
        <div className="social-links">
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
