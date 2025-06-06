import React, { useState } from "react";
import "../styles/home.css";
import IntroGuj from "../components/introGuj";
import IntroEng from "../components/introEng";
import Gallery from "../components/gallery";

function Home() {
  const [showIntroGuj, setShowIntroGuj] = useState(true);

  const toggleComponent = () => {
    setShowIntroGuj(!showIntroGuj);
  };


  return (
    <div className="main">
      <div className="lang-toggle">
        <button className="langBtn" onClick={toggleComponent}>Guj/Eng</button>
      </div>
      <section className="introduction">
        <div className="intro-header">
          <h2>Introduction</h2>
        </div>
        <div className="underline"></div>
        <div className="intro-content">

          {showIntroGuj ? <IntroGuj /> : <IntroEng />}
        </div>
      </section>


      <section className="news-updates">
        <h2>Latest Issue Released</h2>
        <div className="underline"></div>
        <article>
          <p>
            Our latest issue is now available online and in print. Check out
            the exciting stories and features inside.
          </p>
        </article>
      </section>
      <section className="gallery">

        <h2>Gallery</h2>
        <div className="underline"></div>
        <div className="gallery-section">
          <Gallery />
        </div>
      </section>

    </div>
  );

}

export default Home;