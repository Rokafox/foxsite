// src/components/Footer/Footer.js

import React from 'react';
import './footer.css'; // Make sure to create and import the corresponding CSS file for styling

const Footer = () => {
  const year = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="footer">
      <div className="container">
        <p>@{year} Rokafox</p>
        <p>Roka is a game character from Madohi Shiroki no Kamikakushi</p>
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
