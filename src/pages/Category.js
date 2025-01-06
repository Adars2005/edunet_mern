import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewsList from './NewsList';
import './Category.css';

const Category = () => {
    const { category } = useParams(); // Extract category from URL
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch articles based on the category
        fetch(`https://api.example.com/articles/category/${category}`) // Replace with your backend URL
            .then((response) => response.json())
            .then((data) => setArticles(data))
            .catch((error) => console.error('Error fetching articles:', error));
    }, [category]);

    return (
        <div className="category">
            <h1>{category} News</h1>
            <NewsList articles={articles} />
        </div>
    );
};

export default Category;
