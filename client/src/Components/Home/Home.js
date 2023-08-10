import React from "react";
import searchIcon from "./icons/Search.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home({ setMovieData, handleInputChange, movieTitle }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const API = `http://localhost:9010/movies?title=${movieTitle}`;
    const response = await axios.get(API);
    console.log(response);
    setMovieData(response.data);
    navigate("/Form");
  };

  return (
    <div>
      <h1 className="home-title">CineScope</h1>
      <form>
        <input
          className="hometab"
          placeholder="search movies2"
          type="text"
          onChange={handleInputChange}
        ></input>
        <button className="button2" onClick={handleSubmit}>
          <img className="icon2" src={searchIcon} alt="submit" />
        </button>
      </form>
    </div>
  );
}
