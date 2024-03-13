import React from 'react';
import { useParams } from 'react-router-dom';
import { stories, stories_title } from './StoryData';
import './story.css';

const Story = () => {
  let { id } = useParams();

  // Get the story array based on the id
  const storyParts = stories[id];
  const title = stories_title[id];

  // Render the story parts
  const renderStoryPart = (part, index) => {
    switch (part.type) {
      case 'text':
        return <p key={index} className="story-content">{part.content}</p>;
      case 'image':
        return <img key={index} src={part.src} alt={part.alt} className="story-image" />;
      case 'link':
        return <a key={index} href={part.href} className="story-link">{part.content}</a>;
      case 'header':
        const HeaderTag = `h${part.level}`; // Dynamic tag based on the level (1, 2, 3, etc.)
        return <HeaderTag key={index} className="story-header">{part.content}</HeaderTag>;
      case 'unordered-list':
        return (
          <ul key={index} className="story-list">
            {part.items.map((item, itemIndex) => (
              <li key={itemIndex} className="story-list-item">{item.content}</li>
            ))}
          </ul>
        );
      case 'ordered-list':
        return (
          <ol key={index} className="story-list">
            {part.items.map((item, itemIndex) => (
              <li key={itemIndex} className="story-list-item">{item.content}</li>
            ))}
          </ol>
        );
      case 'video':
        return (
          <video key={index} controls className="story-video">
            <source src={part.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      default:
        return null;
    }
  };

  return (
    <div className="story-container">
      <h2 className="story-title">{title}</h2>
      {storyParts.map(renderStoryPart)}
    </div>
  );
};

export default Story;
