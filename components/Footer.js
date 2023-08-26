// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Otaku Realm. All rights reserved.
        </p>
        <div className="footer-copyright">
          <a href="https://acodernamedsubhro.web.app/" className="footer-link">
            Created by ACNS
          </a>
        </div>
        <div className="footer-credit">
          <p>
            Website designed with{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{" "}
            by{" "}
            <a
              href="https://acodernamedsubhro.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACNS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
