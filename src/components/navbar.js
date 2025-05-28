import React from "react";
import "../styles/nav.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <nav className="navbar">
        <div className="logo" />
        <div className="navbar-title">Dashnam Circular</div>
        <button
          className="navbar-toggle"
          aria-label="Toggle navigation"
          onClick={this.toggleMenu}
        >
          ☰
        </button>
        <ul className={`navbar-menu${isOpen ? " active" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Magazines</a>
          </li>
          <li>
            <a href="#">Contribute</a>
          </li>
          <li>
            <a href="#">Advertise</a>
          </li>
          <li>
            <a href="#">Funding</a>
          </li>
          <li>
            <a href="#">Review</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
