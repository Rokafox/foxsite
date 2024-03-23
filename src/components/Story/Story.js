import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './story.css';
import CodeDisplay from '../Code/Code';
import ProgressBar from "@ramonak/react-progress-bar";

const Story = () => {
  const [storyData, setStoryData] = useState({ stories: {}, stories_title: {} });
  const [language] = useState(localStorage.getItem('language') || 'jp');

  useEffect(() => {
    import(`./StoryData_${language}.js`)
      .then((module) => {
        // Assuming the module exports stories and stories_title
        setStoryData({ stories: module.stories, stories_title: module.stories_title });
      })
      .catch((error) => {
        console.error(`Failed to load story data in ${language}:`, error);
        // Optionally, set to a default language or show an error message
      });
  }, [language]);

  let { id } = useParams();

  const getErrorMessage = (language) => {
    switch (language) {
      case 'jp':
        return 'このストーリーの日本語翻訳は存在しません';
      case 'cn':
        return '本文的中文翻译不存在';
      case 'en':
        return 'Translation not available for this story';
      default:
        return 'Story not available. The incident shall be reported to the authorities.';
    }
  };
  
  // Now we access storyParts and title from storyData
  const storyParts = storyData.stories[id] || [{ type: 'text', content: getErrorMessage(language) }];

  const title = storyData.stories_title[id] || 'Story Not Found';

  // Render the story parts
  const renderStoryPart = (part, index) => {
    switch (part.type) {
      case 'text':
        return <p key={index} className="story-content">{part.content}</p>;
      case 'image':
        return <img key={index} src={part.src} alt={part.alt} className="story-image" style={{ width: part.width }} />;
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
      case 'code':
        return <CodeDisplay key={index} code={part.content} language={part.language} />;
      case 'progress-bar':
        return <ProgressBar key={index} completed={part.completed} 
        bgColor={part.bgColor} height={part.height} labelColor={part.labelColor} 
        labelSize={part.labelSize} maxCompleted={part.maxCompleted} customLabel={part.customLabel} />;
      default:
        return null;
    }
  };

  // Check if storyParts exist to render them
  return (
    <div className="story-container">
      <h2 className="story-title">{title}</h2>
      {storyParts && storyParts.map(renderStoryPart)}
    </div>
  );
};

export default Story;
