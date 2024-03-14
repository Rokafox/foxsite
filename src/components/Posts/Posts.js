import React, { useState } from 'react';
import './posts.css'; 
import { translate } from '../../utilities/translate';

// Mock data for software releases, replace with real data fetching logic
const mockPosts_en = [
    {
        id: 1,
        title: 'Test Post 1',
        category: 'Shower Thoughts',
        date: '2021-10-01',
        intro: 'This is a brief introduction to Test Post 1...',
        link: '/stories/6', 
    },
    // Add more here
];

const mockPosts_cn = [
    {
        id: 1,
        title: '测试帖子 1',
        category: '淋浴随想',
        date: '2021-10-01',
        intro: '这是对测试帖子1的简要介绍...',
        link: '/stories/6',
    },
    // Add more here
];

const mockPosts_jp = [
    {
        id: 1,
        title: 'テスト投稿 1',
        category: 'シャワー中のひらめき',
        date: '2021-10-01',
        intro: 'これはテスト投稿1の簡単な紹介です...',
        link: '/stories/6',
    },
    // Add more here
];

const Posts = () => {
  // State to hold the search term
  const [language] = useState(localStorage.getItem('language') || 'en');
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