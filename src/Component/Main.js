import React from 'react';
import { Sparkles, Star } from "lucide-react";
import AddMovie from './AddMovie';

function Main({ movies, setmovies }) {
    return (
        <main className="main-container">
            <Star className="decor-star star-left" size={14} fill="currentColor" />
            <Star className="decor-star star-right" size={18} fill="currentColor" />
            <Star className="decor-star s3" size={10} fill="currentColor" />
            <Sparkles className="decor-star sp1" size={22} />
            <Sparkles className="decor-star sp2" size={16} />
            <div className="header-content">
                <div className="badge-container">
                    <div className="badge">
                        <Sparkles size={14} className="sparkle-icon" />
                        Where dreams come true
                    </div>
                    <Sparkles className="decor-sparkle-badge" size={20} />
                </div>

                <h1 className="header-title">
                    YOUR <span className="magical-text">MAGICAL</span> <br />
                    MOVIE COLLECTION
                </h1>

            
                <div >
                    <AddMovie movies={movies} setmovies={setmovies} />

                </div>
            </div>
        </main>
    )
}

export default Main;