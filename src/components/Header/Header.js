import React from 'react';
import './header.css'; 
import { translate } from '../../utilities/translate';
import { useState } from 'react';

const Header = () => {

    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

    const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
      localStorage.setItem('language', event.target.value); // en, cn, jp
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="avatar-container">
                    <img src="/rokafox_small.png" alt="Writer Avatar" className="writer-avatar" />
                    <div className="writer-name">Rokafox</div>
                </div>
                <div className="language-container">
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="language-select"
                    >
                        <option value="en">English</option>
                        <option value="cn">中文</option>
                        <option value="jp">日本語</option>
                    </select>
                </div>
                <nav className="navigation">
                    <ul>
                        <li><a href="/">{translate('home', language)}</a></li>
                        <li><a href="/software">{translate('app', language)}</a></li>
                        <li><a href="/stories">{translate('stories', language)}</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header
