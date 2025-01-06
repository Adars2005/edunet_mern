import React from 'react';
import './ArticleDetails.css';

const ArticleDetails = ({ article }) => {
    if (!article) {
        return <p>Loading...</p>;
    }

    const { title, author, publicationDate, content, relatedArticles } = article;

    return (
        <div className="article-details">
            <h1 className="article-title">{title}</h1>
            <div className="article-meta">
                <span>By: {author}</span> | <span>{new Date(publicationDate).toDateString()}</span>
            </div>
            <p className="article-content">{content}</p>

            <h2 className="related-articles-title">Related Articles</h2>
            <ul className="related-articles-list">
                {relatedArticles.map((related, index) => (
                    <li key={index}>
                        <a href={`/article/${related.id}`}>{related.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleDetails;
