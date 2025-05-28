import React from 'react';
import '../styles/review.css';

class Review extends React.Component {
    render() { 
        return (
            <main>
            <section className="review-section">
                <h1>Magazine Reviews & Suggestions</h1>
                <p>
                We value your feedback! Please share your review about our magazine
                and any suggestions you have.
                </p>
                <form className="review-form">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    required
                />

                <label htmlFor="review">Review:</label>
                <textarea
                    id="review"
                    name="review"
                    rows="4"
                    placeholder="Write your review here..."
                    required
                ></textarea>

                <label htmlFor="suggestions">Suggestions:</label>
                <textarea
                    id="suggestions"
                    name="suggestions"
                    rows="4"
                    placeholder="Your suggestions..."
                    required
                ></textarea>

                <button type="submit">Submit</button>
                </form>
            </section>
            </main>
        );
    }
}
 
export default Review;