import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "/styles/AnimeDetail.module.css";

const AnimeDetail = () => {
  const router = useRouter();
  const { name } = router.query;
  const [animeDetails, setAnimeDetails] = useState(null);
    console.log(name);
  useEffect(() => {
    async function fetchAnimeDetails() {
      try {
        const animeName = name; // Get the anime name directly from router.query.name
        const response = await axios.get(
          `https://kitsu.io/api/edge/anime?filter[text]=${animeName}`
        );
        const animeData = response.data.data[0];
        setAnimeDetails(animeData);
      } catch (error) {
        console.error("Error fetching anime details:", error);
      }
    }

    fetchAnimeDetails();
  }, [name]);

  if (!animeDetails) {
    return <div>Loading...</div>;
  }

  const { attributes } = animeDetails;

  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailContent}>
        <h1 className={styles.animeName}>{attributes.canonicalTitle}</h1>
        <div className={styles.imageContainer}>
          <Image
            src={attributes.posterImage.original}
            alt={attributes.canonicalTitle}
            width={300}
            height={400}
            className={styles.animeImage}
            quality={90} // Adjust image quality (0-100)
            loading="eager" // Load the image immediately
          />
        </div>
        <div className={styles.details}>
          <p className={styles.description}>{attributes.description}</p>
          <p className={styles.airedOn}>Aired on: {attributes.startDate}</p>
          {/* Add more details here as needed */}
        </div>
        <h2 className={styles.episodeHeading}>Episodes</h2>
        <ul className={styles.episodeList}>
          {attributes.episodeCount && attributes.episodeCount > 0 ? (
            Array.from({ length: attributes.episodeCount }, (_, index) => (
              <li key={index} className={styles.episodeListItem}>
                <a href={`/anime/${name}/${index + 1}`}>Episode {index + 1}</a>
              </li>
            ))
          ) : (
            <li className={styles.episodeListItem}>No episodes available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AnimeDetail;
