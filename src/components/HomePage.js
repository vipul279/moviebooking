import React, { useState, useEffect,useCallback } from "react";
import MovieCard from "./MovieCard";
import './HomePage.css'

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const MovieTitles = [
    "The Dark Knight",
    "Shutter Island",
    "Kishkindha Kaandam",
    "The GodFather",
    "Joker",
    "Maharaja",
    "Inception",
    "Andhadhun",
    "Predestination",
    "Stree",
    "Fight Club",
    "Old Boy",
    "Interstellar",
    "The Matrix",
    "The Shawshank Redemption",
    "Se7en",
    
    
  ];

  const fetchMovies = useCallback(async () => {
    try {
      const movieData = await Promise.all(
        MovieTitles.map(async (title) => {
          const response = await fetch(
            `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=47515223`
          );
          const data = await response.json();
          return data.Response === "True" ? data : null;
        })
      );
      setMovies(movieData.filter((movie) => movie !== null)); // Remove nulls for invalid responses
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  }, [MovieTitles]); // Add dependencies if used inside fetchMovies
 
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <>
      <div className="moviescontainer">
        <div className="header">Top Movies<hr /></div>
        
        <div className="moviesgrid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;


