import React from "react";
import "../styles/footer.css";
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="visitor-count">
          Visitors Count: <span id="visitorCount">0</span>
        </div>
        <div className="footer-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Join our WhatsApp Group
          </a>
          <div className="contact-info">
            <p>Contact us:</p>
            <p>Email: dashnamcircular@gmail.com</p>
            <p>Phone: +91 9898550833</p>
            <p>Phone: +91 9724410375</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;