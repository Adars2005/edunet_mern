import React from 'react';
import NewsCard from '../components/NewsCard';
import './NewsList.css';

const NewsList = ({ articles, onArticleClick }) => {
    return (
        <div className="news-list">
            {articles.map((article, index) => (
                <NewsCard
                    key={index}
                    title={article.title}
                    summary={article.summary}
                    image={article.image}
                    onClick={() => onArticleClick(article)}
                />
            ))}
        </div>
    );
};

export default NewsList;
