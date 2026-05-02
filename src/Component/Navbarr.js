import React from 'react';
import { Sparkles, Search, Film, Home } from "lucide-react";
import { Link } from "react-router-dom";
import './Navbarr.css'; 
import ReactStars from 'react-stars'


function Navbarr({ settext, setrate }) {
    return (
        <nav className="navbar-container">
            <div className="navbar-content">

             
                <div className="logo-section">
                    <Sparkles size={24} color="#4cc9f0" />
                    <span className="logo-text">DISNEYVAULT</span>
                </div>

            
                <ul className="nav-links">
                    <li className="nav-item">
                        <Home size={18} /> <Link to="/about" style={{ textDecoration: "none", color: "white" }}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Film size={18} /> <Link to="/movies" style={{textDecoration:"none", color:"white"}}>Movies</Link>
                    </li>
                    
                   
                </ul>
                <div className="search-container">
                    <Search size={18} className="search-icon" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search"
                        onChange={(e)=> settext(e.target.value)}
                    />
                </div>
                <div className='stars-wrapper'>
                    <ReactStars
                        count={5}
                        size={24}
                        color2={'#ffd700'}
                        onChange={(newRating) => setrate(newRating)}
                        edit={true}
                    />
                </div>

             
                <button className="signin-button">
                    Sign In
                </button>

            </div>
        </nav>
    );
}

export default Navbarr;