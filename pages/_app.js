// pages/_app.js
import React from "react";
import { PageProvider } from "../contexts/PageContext";
import "../styles/main.css";
import Navbar from "/components/Navbar"; // Adjust the path to the Navbar component

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {" "}
      {/* Wrap everything in a parent element */}
      <Navbar />
      <PageProvider>
        <Component {...pageProps} />
      </PageProvider>
    </div>
  );
}

export default MyApp;
