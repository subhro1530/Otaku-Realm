// pages/index.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchBar from "/components/SearchBar";
import AnimeBlock from "../components/AnimeBlock"; 

function Home() {
  const [animeResults, setAnimeResults] = useState([]);
  const [topAnime, setTopAnime] = useState([]); // State variable for top anime

  useEffect(() => {
    const fetchTopAnimeData = async () => {
      try {
        const response = await axios.get("/api/api?action=topAnime"); // Use the API route
        setTopAnime(response.data);
      } catch (error) {
        console.error("Error fetching top anime:", error);
      }
    };
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
        <h2>Top Anime</h2>
        <div className="anime-blocks">
          {topAnime.map((anime) => (
            <AnimeBlock key={anime.mal_id} anime={anime} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
