import React, { useState } from 'react';
import './stories.css';
import { translate } from '../../utilities/translate';

// Mock data for stories, replace with real data fetching logic
const mockStories_en = [
    {
        id: 1,
        title: 'Story Title 1',
        category: 'Fantasy',
        date: '2021-10-01',
        excerpt: 'This is a brief excerpt from Story 1...',
        link: '/stories/1', // Assuming you'll have a route for individual stories
    },
    // Add more stories here
];

const mockStories_cn = [
    {
        id: 1,
        title: '故事标题 1',
        category: '幻想',
        date: '2021-10-01',
        excerpt: '这是故事1的简要摘录...',
        link: '/stories/1',
    },
    // Add more stories here
];

const mockStories_jp = [
    {
        id: 1,
        title: 'ストーリータイトル 1',
        category: 'ファンタジー',
        date: '2021-10-01',
        excerpt: 'これはストーリー1の簡単な抜粋です...',
        link: '/stories/1',
    },
    // Add more stories here
  
];

const Stories = () => {
  // State to hold the search term
  const [language] = useState(localStorage.getItem('language') || 'en');
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
