import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleDetails from './ArticleDetails';
import './Article.css';

const Article = () => {
    const { id } = useParams(); // Extract article ID from URL
    const [article, setArticle] = useState(null); // State to hold article data

    useEffect(() => {
        // Fetch the article details based on the ID
        fetch(`https://api.example.com/articles/${id}`) // Replace with your backend URL
            .then((response) => response.json())
            .then((data) => setArticle(data))
            .catch((error) => console.error('Error fetching article:', error));
    }, [id]);

    return (
        <div className="article-page">
            {article ? (
                <ArticleDetails article={article} />
            ) : (
                <p>Loading...</p> // Show loading message until the article is fetched
            )}
        </div>
    );
};

export default Article;
