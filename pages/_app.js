// pages/_app.js
import React from "react";
import { PageProvider } from "../contexts/PageContext";
import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
}

export default MyApp;
