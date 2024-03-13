import React, { useState } from 'react';
import './posts.css'; 

// Mock data for software releases, replace with real data fetching logic
const mockPosts = [
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

const Posts = () => {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle change in search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

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
        placeholder="Smart Search..."
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
          <a href={post.link}>Read More</a>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Posts;