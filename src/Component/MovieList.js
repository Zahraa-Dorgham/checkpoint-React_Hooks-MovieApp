import React from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'

function MovieList({ movies, text , rate}) {
  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'Cinzel, serif', color: '#ffffff'
        
       }}>Find Your Favorite Movie</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {movies.filter((el) => el.name.toLowerCase().includes(text.toLowerCase()) && el.rating >= rate).map((movie) => (
              <MovieCard  el={movie}  />
          ))}
      </div>
      
    </div>
  )
}

export default MovieList
