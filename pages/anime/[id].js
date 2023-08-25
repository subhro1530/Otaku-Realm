// pages/anime/[id].js
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { usePageContext } from "../../contexts/PageContext";

function AnimeDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { currentPageState, setCurrentPageState } = usePageContext();

  useEffect(() => {
    localStorage.setItem("currentPageState", JSON.stringify(currentPageState));
    setCurrentPageState(null);
  }, [currentPageState]);

  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem("currentPageState"));
    if (storedState) {
      setCurrentPageState(storedState);
    }
  }, []);

  return (
    <div className="container">
      <h1>Anime Details Page</h1>
      <p>Display detailed information about anime with ID: {id}</p>
    </div>
  );
}

export default AnimeDetails;
