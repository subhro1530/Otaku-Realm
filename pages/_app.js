// pages/_app.js
import React from "react";
import { PageProvider } from "../contexts/PageContext";
import "../styles/main.css";
import Navbar from "/components/Navbar"; // Adjust the path to the Navbar component

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {" "}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha384-59p0Bj1t/0TdKJKM6VOrDufqKsN51t9WEa5xy5jQYn79JX4yZg4Ig4K+4RfNkC7B"
        crossorigin="anonymous"
      />
      {/* Wrap everything in a parent element */}
      <Navbar />
      <PageProvider>
        <Component {...pageProps} />
      </PageProvider>
    </div>
  );
}

export default MyApp;
