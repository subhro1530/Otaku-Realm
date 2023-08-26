// pages/_app.js
import React from "react";
import { PageProvider } from "../contexts/PageContext";
import "../styles/main.css";
import Navbar from "/components/Navbar"; // Adjust the path to the Navbar component
import Footer from "/components/Footer"; 

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {" "}
      <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      {/* Wrap everything in a parent element */}
      <Navbar />
      <PageProvider>
        <Component {...pageProps} />
      </PageProvider>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MyApp;
