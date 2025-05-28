import React from "react";
import "../styles/mag.css";

class Magazine extends React.Component {
  render() {
    return (
      <main>
        <div className="search-box">
          <form className="search-form" role="search" aria-label="Site search">
            <input
              type="search"
              className="search-input"
              placeholder="Search magazines..."
              aria-label="Search magazines"
            />
            <button
              type="submit"
              className="search-button"
              aria-label="Submit search"
            >
              &#128269;
            </button>
          </form>
          <button className="sort-button" aria-label="Sort magazines">
            Sort
          </button>
        </div>

        <section className="magazine-grid">
          <article className="magazine-card">
            <div className="img"></div>
            <h2 className="magazine-title">Magazine Title 1</h2>
            <p className="magazine-date">January 2024</p>
          </article>
          <article className="magazine-card">
            <div className="img"></div>
            <h2 className="magazine-title">Magazine Title 2</h2>
            <p className="magazine-date">February 2024</p>
          </article>
          <article className="magazine-card">
            <div className="img"></div>
            <h2 className="magazine-title">Magazine Title 3</h2>
            <p className="magazine-date">March 2024</p>
          </article>
          <article className="magazine-card">
            <div className="img"></div>
            <h2 className="magazine-title">Magazine Title 4</h2>
            <p className="magazine-date">April 2024</p>
          </article>
          <article className="magazine-card">
            <div className="img"></div>
            <h2 className="magazine-title">Magazine Title 5</h2>
            <p className="magazine-date">April 2024</p>
          </article>
          <article className="magazine-card">
            <div className="img"></div>
            <h2 className="magazine-title">Magazine Title 6</h2>
            <p className="magazine-date">April 2024</p>
          </article>
          <article className="magazine-card">
            <div className="img"></div>
            <h2 className="magazine-title">Magazine Title 7</h2>
            <p className="magazine-date">April 2024</p>
          </article>
        </section>
      </main>
    );
  }
}

export default Magazine;
