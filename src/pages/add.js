import React from 'react';
import '../styles/add.css';

class Addvertisement extends React.Component {
    render() {
        return (
            <main>
                <section className="ad-application">
                    <h2>Apply to Give Advertisement</h2>
                    <form
                        id="adForm"
                        action="#"
                        method="post"
                        encType="multipart/form-data"
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                pattern="[0-9]{10}"
                                title="Enter 10 digit phone number"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Advertisement Details:</label>
                            <textarea id="details" name="details" rows="5" required></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="adPhoto">Upload Advertisement Photo:</label>
                            <input
                                type="file"
                                id="adPhoto"
                                name="adPhoto"
                                accept="image/*"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Submit Application</button>
                    </form>
                </section>
            </main>
        );
    }
}

export default Addvertisement;
