// components/AnimeBlock.js
import React from "react";

const AnimeBlock = ({ anime }) => {
  return (
    <div className="anime-block">
      <img src={anime.image_url} alt={anime.title} />
      <h3>{anime.title}</h3>
      <p>Rank: {anime.rank}</p>
    </div>
  );
};

export default AnimeBlock;
