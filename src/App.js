import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Article from './pages/Article';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SideNavbar from './components/SideNavbar';


function App() {
    return (
        <Router>
            <div className="side-navbar-wrapper">
                <SideNavbar />
                <div className="content">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category" element={<Category />} />
                        <Route path="/article" element={<Article />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
export default App;