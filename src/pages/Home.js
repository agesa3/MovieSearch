import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaSearch } from "react-icons/fa";
import MovieCard from "../components/MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=26fbef8c";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    searchMovies(searchTerm);
  };

  useEffect(() => {
    // searchMovies("spiderman");
  }, []);

  return (
    <>
      <div className="app">
        <h1>Movies</h1>
        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={handleChange}
          />
          <div>
            <FaSearch onClick={handleSearch} />
          </div>
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} size={50}  />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
