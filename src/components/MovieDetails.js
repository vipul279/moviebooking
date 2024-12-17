import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

import './MovieDetails.css'

const MovieDetails = () => {

  const { movieId } = useParams(); 
  const [movie, setMovie] = useState(null);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${movieId}&apikey=47515223`
      );
      const data = await response.json();
      
      setMovie(data);
      
    } catch {
      console.error("Error in fetching ");
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
        <div className="movie-details">
            <div className="titleandposter">
                <h1>{movie.Title}</h1>
                
            </div>
            <div className="all-details">
                <div className="movieposter">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="other-details">
                    <p><strong>Year:</strong> {movie.Year}</p>
                    <p><strong>Genre:</strong> {movie.Genre}</p>
                    <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
                    <p><strong>Language:</strong> {movie.Language}</p>
                    <p><strong>Plot:</strong> {movie.Plot}</p>
                </div>
                
            </div>
            <div className="bookingbutton">
                <Link to={`/movie/${movieId}/bookingform`}><button>Book Now</button>
                </Link>
                
            </div>
            
        </div>
    </div>
    
  );
};

export default MovieDetails;
