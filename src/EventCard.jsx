import React from 'react';

const EventCard = ({ title, description, imageUrl, websiteUrl }) => {
    const handleClick = () => {
      window.open(websiteUrl, '_blank');
    };
  
    return (
      <div className="event-card">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        {websiteUrl && <button onClick={handleClick}>Visit Website</button>}
      </div>
    );
  };
  
  export default EventCard;