import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
import searchIcon from "./icons/Search.png";
import starIcon from "./icons/star.png";
import "./Form.css";

export default function Form({
  movieData,
  handleInputChange,
  handleSubmit,
  movieTitle,
  playerData,
}) {
  // const [movieTitle, setMovieTitle] = useState("");
  // const [movieData, setMovieData] = useState({});
  // const [playerData, setPlayerData] = useState({});
  // useEffect(() => {
  //   player();
  // }, [movieData]);

  // const player = async () => {
  //   const API = `http://localhost:9010/videos?title=${movieTitle}`;
  //   const res = await axios.get(API);
  //   setPlayerData(res.data);
  // };

  // const handleInputChange = (event) => {
  //   setMovieTitle(event.target.value);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const API = `http://localhost:9010/movies?title=${movieTitle}&year=${movieData.Released}`;
  //   const response = await axios.get(API);
  //   console.log(response);
  //   setMovieData(response.data);
  // };

  return (
    <div>
      <form className="hometab">
        <input
          className="hometab1"
          placeholder="search movies"
          type="text"
          onChange={handleInputChange}
        ></input>
        <button className="button" onClick={handleSubmit}>
          <img className="icon" src={searchIcon} alt="submit" />
        </button>
      </form>

      <div>
        <div className="data">
          <div className="block">
            <h2> {movieData.Title} </h2>
            <div className="GRR">
              <p className="num"> {movieData.Genre}</p>
              <p className="num">{movieData.Runtime}</p>
              <p className="num">{movieData.Released}</p>
            </div>

            {movieData.Director && (
              <div>
                <div className="DA">
                  <p>
                    <span class="director"></span> {movieData.Director}
                  </p>
                  <p>
                    <span class="actor"></span> {movieData.Actors}
                  </p>
                </div>
                <p className="plot">{movieData.Plot}</p>

                <div className="rating">
                  <img className="star" src={starIcon} alt="star" />
                  <p>{movieData.imdbRating}</p>
                </div>
              </div>
            )}
            <div className="video-container">
              {movieData.Title && (
                <iframe
                  className="video"
                  title={movieData.Title}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${playerData}`}
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              )}
            </div>
          </div>
          <img
            className="poster"
            src={movieData.Poster}
            alt={movieData.Title}
          ></img>
        </div>
        <div className="imgcontainer">
          <div className="overlay"></div>
          <img
            className="bgimg"
            src={movieData.Poster}
            alt={movieData.Title}
          ></img>
        </div>
      </div>
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
