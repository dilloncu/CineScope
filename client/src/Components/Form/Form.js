import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Form() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieData, setMovieData] = useState({});
  const [playerData, setPlayerData] = useState({});
  useEffect(() => {
    player();
  }, [movieData]);

  const player = async () => {
    const API = `http://localhost:9010/videos?title=${movieTitle}`;
    const res = await axios.get(API);
    setPlayerData(res.data);
  };

  const handleInputChange = (event) => {
    setMovieTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const API = `http://localhost:9010/movies?title=${movieTitle}`;
    const response = await axios.get(API);
    console.log(response);
    setMovieData(response.data);
  };

  return (
    <div>
      <form>
        <input
          className="movie"
          placeholder="search movies"
          type="text"
          onChange={handleInputChange}
        ></input>
        <button className="button" onClick={handleSubmit}>
          Click Here
        </button>
      </form>

      <div>
        <h2> {movieData.Title} </h2>
        <p>{movieData.Released}</p>
        <p>{movieData.Genre}</p>
        <p>{movieData.Director}</p>
        <p>{movieData.Plot}</p>
        <p>{movieData.Actors}</p>
        <img src={movieData.Poster} alt={movieData.Title}></img>
      </div>

      {movieTitle ? (
        <iframe
          title={movieData.Title}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${playerData}`}
          frameborder="0"
          allowfullscreen
        ></iframe>
      ) : (
        <div></div>
      )}
    </div>
  );
}

// movieData.Title
// movieData.Released
// movieData.Genre
// movieData.Director
// movieData.Plot
// movieData.Actors
// movieData.Poster
