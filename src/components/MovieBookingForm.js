import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './MovieBookingForm.css';

const MovieBookingForm = () => {
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");
  const [usermobile, setUsermobile] = useState("");

  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
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
    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]); // Add movieId as the dependency

  const handleFormSubmit = (e) => {
    if (!username || !usermail || !usermobile) {
      alert("Please fill all the details before submitting!");
      e.preventDefault();
    }
  };

  // const movietitle=`${movie.Title}`;
  // console.log(movietitle);

  const movietitle=movie.Title;
  console.log(movietitle);
  return (
    <div className="booking-form">
      <div className="infoform">
        {movie ? <h2>Booking for: {movie.Title}</h2> : <h2>Loading...</h2>}
        <form>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="usermail">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setUsermail(e.target.value)}
          />

          <label htmlFor="usermobile">Mobile</label>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            onChange={(e) => setUsermobile(e.target.value)}
          />

          <Link
            to={`/movie/bookedtickets/${movieId}/${movietitle}/${username}/${usermail}/${usermobile}`}
            onClick={handleFormSubmit}
          >
            <button type="button">Submit</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default MovieBookingForm;
