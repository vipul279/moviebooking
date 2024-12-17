import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import './MoviesBooked.css'

const MoviesBooked = () => {

  const {movieId,username,usermail,usermobile}=useParams();

  const [movie, setMovie] = useState(null);
    console.log({ movieId });
  
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${movieId}&apikey=47515223`
        );
        const data = await response.json();
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.error("Error in fetching movie details:", error);
      }
    };
  
    useEffect(() => {
      fetchMovieDetails();
    }, [movieId]);
  

  const bookingid=Math.floor(Math.random()*1000+1);

  return (
        <div className='moviesbooked'>
        <div className='bookinglist'>
            <h1 className="ticket-title">🎟️ Movie Ticket 🎬</h1>
            {movie ? (
            <div className="ticket-container">
                <div className="ticket">
                <div className="ticket-image">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="ticket-details">
                    <h2>{movie.Title}</h2>
                    <p><strong>Booking ID:</strong> {bookingid}</p>
                    <br />
                    <p><strong>Booked by:</strong> {username}</p>
                    <p><strong>Email:</strong> {usermail}</p>
                    <p><strong>Mobile:</strong> {usermobile}</p>
                </div>
                </div>
            </div>
            ) : (
            <p>Loading movie details...</p>
            )}
        </div>
        </div>


  )
}

export default MoviesBooked