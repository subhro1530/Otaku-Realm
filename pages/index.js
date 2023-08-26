// pages/index.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchBar from "/components/SearchBar";
import { fetchTopAnime } from "../lib/api"; // Update the path

function Home() {
  const [animeResults, setAnimeResults] = useState([]);
  const [topAnimeList, setTopAnimeList] = useState([]);

  useEffect(() => {
    async function fetchTopAnimeData() {
      try {
        const topAnimeList = await fetchTopAnime();
        setTopAnimeList(topAnimeList);
      } catch (error) {
        console.error("Error fetching top anime:", error);
      }
    }

    fetchTopAnimeData();
  }, []);

  const handleSearch = async (term) => {
    try {
      const response = await fetch(`/api/search?searchTerm=${term}`);
      const data = await response.json();
      setAnimeResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="container">
      <h1>Anime Search and Download</h1>
      <SearchBar onSearch={handleSearch} />

      <div className="anime-results">
        {animeResults.map((anime, index) => (
          <Link className="anime-item" key={index} href={`/anime/${index}`}>
            <img src={anime.imageUrl} alt={anime.title} />
            <h3>{anime.title}</h3>
            <p>Episodes: {anime.episodes}</p>
          </Link>
        ))}
      </div>

      <div className="top-anime">
        {topAnimeList.map((anime, index) => (
          <Link key={index} href={`/anime/${anime.mal_id}`}>
            <div className="top-anime-item">
              <img src={anime.image_url} alt={anime.title} />
              <h3>{anime.title}</h3>
              <p>Rank: {anime.rank}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
