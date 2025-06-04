import React from "react";
import "../styles/mag.css";
import Magcard from "../components/magcard";
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

        <div className="magazine-grid">
          <Magcard />
        </div>
      </main>
    );
  }
}

export default Magazine;
