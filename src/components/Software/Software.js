import React, { useState } from 'react';
import './software.css';
import { translate } from '../../utilities/translate';

// Mock data for software releases, replace with real data fetching logic
const mockApps_en = [
    {
        id: 1,
        title: 'Test App 1',
        category: 'Utility',
        date: '2021-10-01',
        intro: 'This is a brief introduction to Test App 1...',
        link: '/stories/5', 
    },
    // Add more here
];

const mockApps_cn = [
    {
        id: 1,
        title: '测试应用 1',
        category: '实用工具',
        date: '2021-10-01',
        intro: '这是对测试应用1的简要介绍...',
        link: '/stories/5',
    },
    // Add more here
];

const mockApps_jp = [
    {
        id: 1,
        title: 'テストアプリ 1',
        category: 'ユーティリティ',
        date: '2021-10-01',
        intro: 'これはテストアプリ1の簡単な紹介です...',
        link: '/stories/5',
    },
    // Add more here
];

const Software = () => {
  // State to hold the search term
  const [language] = useState(localStorage.getItem('language') || 'en');
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