// pages/_app.js

import React from "react";
import { PageProvider } from "../contexts/PageContext";
import "../styles/main.css";
import Navbar from "/components/Navbar"; // Adjust the path to the Navbar component
import Footer from "/components/Footer";
import AnimeDetail from "/pages/anime/[name]"; // Import the AnimeDetail component
import { useRouter } from "next/router"; // Import the useRouter from Next.js

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Check if the current component is the AnimeDetail component
  const isAnimeDetailPage = router.route.includes("/anime/");

  return (
    <div>
      <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* ... (Rest of your code) */}
      {/* Wrap everything in a parent element */}
      <Navbar />
      <PageProvider>
        {/* Render AnimeDetail component if it's an anime detail page */}
        {isAnimeDetailPage ? (
          <AnimeDetail {...pageProps} />
        ) : (
          <Component {...pageProps} />
        )}
      </PageProvider>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MyApp;
