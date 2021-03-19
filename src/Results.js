import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import FlipMove from "react-flip-move";
import axios from "./axios";
import "./Results.css";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  console.log("movies length is: " + movies.length);

  useEffect(() => {
    async function fetchData() {
      console.log("just before fetch");
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [selectedOption]);
  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
