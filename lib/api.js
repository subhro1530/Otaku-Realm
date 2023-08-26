// lib/api.js
import axios from "axios";


const KITSU_BASE_URL = "https://otakurealm/api/edge"; // Base URL for Kitsu API

export async function fetchTopAnime() {
  try {
    const response = await axios.get(`${KITSU_BASE_URL}/anime`, {
      params: {
        sort: "-userCount",
        page: { limit: 10 }, // Adjust the limit as needed
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching top anime:", error);
    return [];
  }
}

export async function fetchAnimeSearchResults(searchTerm) {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        action: "search",
        searchTerm: searchTerm,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
}
