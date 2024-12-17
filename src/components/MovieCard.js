import React from 'react';
import {Link} from 'react-router-dom';
 

const MovieCard = ({movie}) => {
  return (
    <div className="movie-card" style={{height:'490px'}}>

        <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt="" />
            <h1>{movie.Title}</h1>

            <p>{movie.Year}</p>
        </Link>
        
      
    </div>
  )
}

export default MovieCard