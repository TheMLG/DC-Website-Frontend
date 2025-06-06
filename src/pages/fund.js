import React from 'react';
import '../styles/fund.css';

class Fund extends React.Component {
  render() {
    return (
      <>
      
      <form className="payment-form" action="#" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="phone">Phone No.:</label>
        <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{10}"
        required
        />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <button type="submit">To the payment gate way</button>
      </form>

      <div className="qr-container">
        <img
          src="/assets/gallery/qr.png"
          alt="QR Code"
          className="qr-image"
        />
        <a
          href="/assets/gallery/qr.png"
          download="qr.png"
          className="download-button"
        >
          Download
        </a>
      </div>
      </>
    );
  }
}

export default Fund;