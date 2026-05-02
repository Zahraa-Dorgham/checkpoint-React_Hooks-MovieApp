import React from 'react';
import { Star, Play, Sparkles } from "lucide-react";
import "./MovieCard.css";
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom';
const MovieCard = ({ el}) => {
    return (
        <Link to={`/trailer/${el.id}`}>
            <div
                className="movie-card-container group"
            >
                <div className="glow-halo" />

            <div className="card-body">
                <img
                    src={el.posterURL}
                    alt={el.name}
                    className="card-poster"
                    onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x600/1a1a2e/eab308?text=No+Poster";
                    }}
                />

                <div className="card-overlay" />

                <Sparkles className="sparkle-icon" />

                {/* <div className="rating-badge">
                    <Star className="star-icon" />
                    <span>{el.rating}</span>
                </div> */}

                <div className="card-content">
                    <h3 className="movie-title">{el.name}</h3>
                    <ReactStars className="react-stars" count={5} size={24} color2={'#ffd700'} value={el.rating} edit={false} />

                    <p className="movie-description">
                        {el.description}
                    </p>

                    <div className="button-container">
                        <button className="watch-button">
                            <Play size={14} fill="currentColor" />
                            Watch Trailer
                        </button>
                    </div>
                </div>

                <div className="shine-sweep" />
            </div>
           
            
        </div>
        </Link>
    );
};

export default MovieCard;