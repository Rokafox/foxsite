import React, { useState } from 'react';
import './posts.css'; 
import { translate } from '../../utilities/translate';

// Mock data for software releases, replace with real data fetching logic
const mockPosts_en = [
    {
        id: 1,
        title: 'The Secret Garden',
        category: 'Journal',
        date: '2023-03-26',
        intro: 'Welcome to my secret garden!',
        link: '/stories/5', 
    },
    // Add more here
];

const mockPosts_cn = [
    {
        id: 1,
        title: '武陵桃源',
        category: '游记',
        date: '2023-03-26',
        intro: '欢迎来到桃源郷！',
        link: '/stories/5',
    },
    // Add more here
];

const mockPosts_jp = [
    {
        id: 1,
        title: '武陵桃源',
        category: '紀行',
        date: '2023-03-26',
        intro: '桃源郷へようこそ！',
        link: '/stories/5',
    },
    // Add more here
];

const Posts = () => {
  // State to hold the search term
  const [language] = useState(localStorage.getItem('language') || 'jp');
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle change in search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Determine which mockPosts to use based on the language
  let mockPosts;
  if (language === 'cn') {
    mockPosts = mockPosts_cn;
  } else if (language === 'jp') {
    mockPosts = mockPosts_jp;
  } else {
    mockPosts = mockPosts_en;
  }

  // Filter stories based on the search term
  const filteredStories = mockPosts.filter((story) => {
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
      {filteredStories.map((post) => (
        <div key={post.id} className="story-entry">
          <h3>{post.title}</h3>
          <p className="category-tag">{post.category}</p>
          <p className="date-of-publish">{post.date}</p>
          <p className="intro">{post.intro}</p>
          <a href={post.link}>{translate('read_more', language)}</a>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Posts;