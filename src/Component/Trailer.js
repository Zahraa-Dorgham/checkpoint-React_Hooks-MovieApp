import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactStars from 'react-stars';
import './Trailer.css'; 

function Trailer({ movies }) {
  const params = useParams();
  const onemovie = movies.find((el) => el.id == params.id);
  const navigate = useNavigate();


  return (
    <div className="trailer-container">
      <div className="main-content">
        <div className="movie-aside-left">
            <img 
            src={onemovie.posterURL} 
            alt={onemovie.name} 
            className="movie-poster"
          />

          <div className="movie-text-details">
            <h2>{onemovie.name}</h2>
            
            <ReactStars 
              count={5} 
              size={28} 
              color2={'#fbbf24'} 
              value={onemovie.rating} 
              edit={false} 
            />
            <p className="description-text">
              {onemovie.description || "Aucune description disponible."}
            </p>

            <button className="back-btn" onClick={() => navigate("/movies")}>
                Back to Movies list
            </button>
          </div>
        </div>
        <div className="video-section-right">
          {onemovie.videoURL }(
            <iframe
              className="video-frame"
              src={onemovie.videoURL}
              title={onemovie.name}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) 
        </div>

      </div>
    </div>
  );
}

export default Trailer;