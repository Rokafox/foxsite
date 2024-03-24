import React, { useState } from 'react';
import './stories.css';
import { translate } from '../../utilities/translate';

// Mock data for stories, replace with real data fetching logic
const mockStories_en = [
    {
        id: 1,
        title: 'The Rules of Go',
        category: 'Go',
        date: '2024-03-15',
        excerpt: 'A brief introduction to the rules of Go game.',
        link: '/stories/1', // Assuming you'll have a route for individual stories
    },
    // Add more stories here
    {
      id: 2,
      title: 'Endgame Judgment',
      category: 'Go',
      date: '2024-03-20',
      excerpt: 'Determining the outcome of a few special cases of endgames.',
      link: '/stories/2',       
    },
    {
      "id": 3,
      "title": "1600 Go Game Openings",
      "category": "Go",
      "date": "2024-03-24",
      "excerpt": "1600 self-played game openings under ancient Chinese Go rules by Katago",
      "link": "/stories/4",       
    },    
];

const mockStories_cn = [
    {
        id: 1,
        title: '围棋规则',
        category: '围棋',
        date: '2024-03-15',
        excerpt: '对围棋规则的简要介绍',
        link: '/stories/1',
    },
    // Add more stories here
    {
      "id": 2,
      "title": "胜负判定",
      "category": "围棋",
      "date": "2024-03-20",
      "excerpt": "一些终局局面的胜负判定问题",
      "link": "/stories/2",       
    },
    {
      "id": 3,
      "title": "围棋布局1600局",
      "category": "围棋",
      "date": "2024-03-24",
      "excerpt": "中国古棋规则下Katago的自战1600局布局",
      "link": "/stories/4",       
    },     
];

const mockStories_jp = [
    {
        id: 1,
        title: '囲碁のルール',
        category: '囲碁',
        date: '2024-03-15',
        excerpt: '囲碁のルールを簡単に解説',
        link: '/stories/1',
    },
    // Add more stories here
    {
      id: 2,
      title: '勝負の審判',
      category: '囲碁',
      date: '2024-03-20',
      excerpt: 'いくつか判断しづらそうな終局の勝敗判定',
      link: '/stories/2',       
    },
    {
      id: 3,
      title: '囲碁布石1600局',
      category: '囲碁',
      date: '2024-03-24',
      excerpt: '古典中国ルールでKatagoの1600局自戦布石',
      link: '/stories/4',       
    },
];

const Stories = () => {
  // State to hold the search term
  const [language] = useState(localStorage.getItem('language') || 'jp');
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle change in search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Determine which mockApps to use based on the language
  let mockStories;
  if (language === 'cn') {
    mockStories = mockStories_cn;
  } else if (language === 'jp') {
    mockStories = mockStories_jp;
  } else {
    mockStories = mockStories_en;
  }

  // Filter stories based on the search term
  const filteredStories = mockStories.filter((story) => {
    return (
      story.title.toLowerCase().includes(searchTerm) ||
      story.category.toLowerCase().includes(searchTerm) ||
      story.date.includes(searchTerm) ||
      story.excerpt.toLowerCase().includes(searchTerm)
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
      <div className="stories-grid">
        {filteredStories.map((story) => (
          <div key={story.id} className="story-entry">
            <h3>{story.title}</h3>
            <p className="category-tag">{story.category}</p>
            <p className="date-of-publish">{story.date}</p>
            <p className="excerpt">{story.excerpt}</p>
            <a href={story.link}>{translate('read_more', language)}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
