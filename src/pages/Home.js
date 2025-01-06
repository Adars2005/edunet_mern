import React, { useState, useEffect } from 'react';
import NewsList from './NewsList';
import SearchBar from './SearchBar';
import './Home.css';

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const API_KEY = "e8433bc5cd434a5280e80269f003d80e";

    useEffect(() => {
        // Fetch all articles (or you can filter based on searchQuery)
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => setArticles(data.articles))
        .catch((error) => console.error('Error fetching articles:', error));
    }, [searchQuery]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="home">
            <SearchBar onSearch={handleSearch} />
            <NewsList articles={filteredArticles} />
        </div>
    );
};

export default Home;
