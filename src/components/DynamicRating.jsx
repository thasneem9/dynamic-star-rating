import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css';

const DynamicRating = () => {
  const [hoverValue, setHoverValue] = useState(undefined); // For tracking hovered stars
  const [clickValue, setClickValue] = useState(undefined); // For tracking clicked stars
  const totalStars = 10; // Total number of stars

  // Function to handle mouse hover
  const handleMouseEnter = (value) => {
    setHoverValue(value);
  };

  // Function to handle mouse leaving
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  // Function to handle click
  const handleClick = (value) => {
    setClickValue(value);
  };

  return (
    <div className='wrapper'>
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1; // Star values are 1-indexed
        return (
          <FaStar
            key={index}
            size={"90px"}
            //Stars with starValue <= hoverValue (i.e., stars 1 and 2) will now be yellow.
            //The remaining stars (starValue > 2) will remain gray.
            color={starValue <= (hoverValue || clickValue) ? "yellow" : "gray"}
            // Handle mouse enter event
            onMouseEnter={() => handleMouseEnter(starValue)}
            // Handle mouse leave event
            onMouseLeave={handleMouseLeave}
          
            onClick={() => handleClick(starValue)}
            style={{ cursor: 'pointer', transition: 'color 0.2s' }} // Add some transition for smooth color change
          />
        );
      })}
    </div>
  );
};

export default DynamicRating;
