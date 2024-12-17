import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";
import MovieBookingForm from "./components/MovieBookingForm";
import MoviesBooked from "./components/MoviesBooked"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/movie/:movieId" element={<MovieDetails />} />

        <Route path="/movie/:movieId/bookingform" element={<MovieBookingForm/>}></Route>

        <Route path="/movie/bookedtickets/:movieId/:movieTitle/:username/:usermail/:usermobile" element={<MoviesBooked/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
