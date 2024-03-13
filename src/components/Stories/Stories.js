import React, { useState } from 'react';
import './stories.css'; // Make sure to create and import the CSS file for styling

// Mock data for stories, replace with real data fetching logic
const mockStories = [
    {
        id: 1,
        title: 'Story Title 1',
        category: 'Fantasy',
        date: '2021-10-01',
        excerpt: 'This is a brief excerpt from Story 1...',
        link: '/stories/1', // Assuming you'll have a route for individual stories
    },
    // Add more stories here
    {
        id: 2,
        title: 'Story Title 2',
        category: 'Science Fiction',
        date: '2021-10-02',
        excerpt: 'This is a brief excerpt from Story 2...',
        link: '/stories/2',
    },
    {
        id: 3,
        title: 'Story Title 3',
        category: 'Mystery',
        date: '2021-10-03',
        excerpt: 'This is a brief excerpt from Story 3...',
        link: '/stories/3',
    },

    {
        id: 4,
        title: 'Story Title 4',
        category: 'Horror',
        date: '2021-10-04',
        excerpt: 'This is a brief excerpt from Story 4...',
        link: '/stories/4',
    },

];

const Stories = () => {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle change in search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

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
        placeholder="Smart Search..."
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
            <a href={story.link}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
