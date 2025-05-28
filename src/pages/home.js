import React from "react";
import "../styles/home.css";

class Home extends React.Component {
  render() {
    return (
      <main>
        <section className="introduction">
          <h2>Introduction</h2>
          <p>
            Dashnam Circular is a magazine dedicated to bringing you the latest
            news, insightful articles, and updates about our community and
            beyond. Stay informed and connected with us.
          </p>
        </section>
        <section className="news-updates">
          <h2>News & Updates</h2>
          <article>
            <h3>Latest Issue Released</h3>
            <p>
              Our latest issue is now available online and in print. Check out
              the exciting stories and features inside.
            </p>
          </article>
          <article>
            <h3>Upcoming Events</h3>
            <p>
              Join us for our upcoming events and community gatherings. Stay
              tuned for dates and details.
            </p>
          </article>
        </section>
      </main>
    );
  }
}

export default Home;
