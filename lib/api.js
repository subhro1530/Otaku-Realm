// lib/api.js
import axios from "axios";

const BASE_URL = "https://api.jikan.moe/v3";

export async function fetchTopAnime() {
  try {
    const response = await axios.get(`${BASE_URL}/top/anime/1`);
    return response.data.top;
  } catch (error) {
    console.error("Error fetching top anime:", error);
    return [];
  }
}
