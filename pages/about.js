import React from "react";
import Link from "next/link";
import styles from "/styles/About.module.css"; // Import your CSS module for styling

const About = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introContent}>
        <h1 className="heading_about_us">About Us</h1>
        <p className="paragraph">
          Welcome to Otaku Realm, your ultimate destination for everything
          anime. Our passion for anime runs deep, and we're excited to share it
          with fellow enthusiasts like you. Our journey began in [2023], with the goal of creating a haven for anime lovers.
        </p>
        <p className="paragraph">
          Anime isn't just a form of entertainment; it's a way of life. We
          believe that anime has the power to change minds, touch hearts, and
          create connections across the globe. That's why we're committed to
          providing you with the best anime content, information, and details.
        </p>
        <p className="paragraph">
          Our team is dedicated to curating a collection of top anime series
          that have left a lasting impact on fans. From mind-bending plots to
          jaw-dropping animation, we showcase the best of the best. You'll find
          classics that have stood the test of time, as well as hidden gems
          waiting to be discovered.
        </p>
        <p className="paragraph">
          Our vision for Otaku Realm goes beyond just an anime information
          platform. We're on a mission to elevate the anime experience and
          provide a platform where fans can access their favorite shows, engage
          with the community, and stay up-to-date with the latest news and
          releases.
        </p>
        <p className="paragraph">
          As we continue to grow and evolve, we're excited to embark on a
          journey to become a leading competitor in the anime streaming and
          download industry. Our dedication to quality and the love for anime
          drive us to deliver the best experience possible.
        </p>
        <p className="paragraph">
          Join us on this exciting adventure through the world of anime. Let's
          celebrate the passion, creativity, and imagination that make anime a
          unique and cherished art form.
        </p>
        <p className="paragraph">
          Experience the magic of anime with Otaku Realm. Together, we'll
          explore, discover, and connect through the power of storytelling and
          animation.
        </p>
      </div>
    </div>
  );
};

export default About;
