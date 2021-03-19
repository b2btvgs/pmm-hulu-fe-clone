import React, { forwardRef } from "react";
import TextTruncate from "react-text-truncate";
import ThumbUpSharp from "@material-ui/icons/ThumbUpSharp";
import "./VideoCard.css";
import Leopard from "./images/leopard.jpg";

const movieBaseUrl = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${movieBaseUrl}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      <div className="videoCard__overview">
        {/* <p>{movie.overview}</p> */}
        <TextTruncate
          line={2}
          element="p"
          truncateText="..."
          textTruncateChild={<a href="#">Read On</a>}
          text={movie.overview}
        />
      </div>
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} &#8226;`}
        {movie.release_date || movie.first_air_date} &#8226; <ThumbUpSharp />{" "}
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
