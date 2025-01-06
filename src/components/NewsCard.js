import React from 'react';
import './NewsCard.css';

const NewsCard = ({ title, summary, image }) => {
    return (
        <div className="news-card">
            <img src={image} alt="news" />
            <h3>{title}</h3>
            <p>{summary}</p>
        </div>
    );
};

export default NewsCard;
