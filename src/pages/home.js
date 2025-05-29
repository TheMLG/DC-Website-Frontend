import React, { useState } from "react";
import "../styles/home.css";
import IntroGuj from "../components/introGuj";
import IntroEng from "../components/introEng";

function Home() {
  const [showIntroGuj, setShowIntroGuj] = useState(true);

  const toggleComponent = () => {
    setShowIntroGuj(!showIntroGuj);
  };


  return (
    <main>
          <div className="lang-toggle">
            <button className="langBtn" onClick={toggleComponent}>ENG/GUJ</button>
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
    </main>
  );

}

export default Home;
