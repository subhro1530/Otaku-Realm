// pages/api/search.js
import axios from "axios";

export default async function handler(req, res) {
  const { searchTerm } = req.query;

  try {
    const response = await axios.get(
      `https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}`
    );
    const data = response.data.data;

    const searchResults = data.map((result) => ({
      title: result.attributes.canonicalTitle,
      episodes: result.attributes.episodeCount,
      imageUrl: result.attributes.posterImage.original,
    }));

    res.status(200).json(searchResults);
  } catch (error) {
    console.error("Error fetching anime:", error);
    res.status(500).json({ error: "An error occurred while fetching anime." });
  }
}
