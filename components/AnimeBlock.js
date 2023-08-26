import React from "react";
import Link from "next/link";

const AnimeBlock = ({ anime }) => {
  return (
    <Link href={`/anime/${anime.attributes.slug}`}>
      <a className="anime-block">
        <img
          src={anime.attributes.posterImage.original}
          alt={anime.attributes.canonicalTitle}
        />
        <h3 className="anime-title">{anime.attributes.canonicalTitle}</h3>
        <p className="anime-rank">Rank: {anime.attributes.popularityRank}</p>
      </a>
    </Link>
  );
};

export default AnimeBlock;
