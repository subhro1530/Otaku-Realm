// pages/api/topAnime.js
import { fetchTopAnime } from "../../lib/api";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const topAnimeList = await fetchTopAnime();
      res.status(200).json(topAnimeList);
    } catch (error) {
      console.error("Error fetching top anime:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
