import React, { useState } from 'react';
import './software.css'; 

// Mock data for software releases, replace with real data fetching logic
const mockApps = [
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

const Software = () => {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle change in search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

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
        placeholder="Smart Search..."
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
          <a href={software.link}>Read More</a>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Software;