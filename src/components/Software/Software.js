import React, { useState } from 'react';
import './software.css';
import { translate } from '../../utilities/translate';

// Mock data for software releases, replace with real data fetching logic
const mockApps_en = [
    {
        id: 1,
        title: 'Go game PC software',
        category: 'Go',
        date: '2023-03-22',
        intro: 'An introduction to the essential PC software for playing Go',
        link: '/stories/3', 
    },
    // Add more here
];

const mockApps_cn = [
    {
      id: 1,
      title: 'PC围棋软件',
      category: '围棋',
      date: '2023-03-22',
      intro: '介绍一些好用的PC围棋软件',
      link: '/stories/3',
    },
  // Add more here
];

const mockApps_jp = [
    {
        id: 1,
        title: 'PC用囲碁アプリ',
        category: '囲碁',
        date: '2023-03-22',
        intro: '囲碁を楽しめる不可欠なPCアプリ',
        link: '/stories/3',
    },
    // Add more here
];

const Software = () => {
  // State to hold the search term
  const [language] = useState(localStorage.getItem('language') || 'jp');
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle change in search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Determine which mockApps to use based on the language
  let mockApps;
  if (language === 'cn') {
    mockApps = mockApps_cn;
  } else if (language === 'jp') {
    mockApps = mockApps_jp;
  } else {
    mockApps = mockApps_en;
  }

  // Filter stories based on the search term
  const filteredStories = mockApps.filter((story) => {
    return (
      story.title.toLowerCase().includes(searchTerm) ||
      story.category.toLowerCase().includes(searchTerm) ||
      story.date.includes(searchTerm) ||
      story.intro.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder={translate('smartsearch', language)}
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
    <div className="software-grid">
      {filteredStories.map((software) => (
        <div key={software.id} className="story-entry">
          <h3>{software.title}</h3>
          <p className="category-tag">{software.category}</p>
          <p className="date-of-publish">{software.date}</p>
          <p className="intro">{software.intro}</p>
          <a href={software.link}>{translate('read_more', language)}</a>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Software;