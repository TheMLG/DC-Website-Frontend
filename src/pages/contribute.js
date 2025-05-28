import React from 'react';
import '../styles/contribute.css';

class Contribute extends React.Component {
    render() {
        return (
            <main>
                <section className="submission-form-section">
                    <h2>Submit Your Article or Idea</h2>
                    <form
                        id="articleSubmissionForm"
                        action="#"
                        method="post"
                        encType="multipart/form-data"
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <textarea
                                id="name"
                                rows="2"
                                placeholder="Enter your name"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Article Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                required
                                placeholder="Enter the title of your article"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contentFile">Upload Article Text File:</label>
                            <input
                                type="file"
                                id="contentFile"
                                name="contentFile"
                                accept=".txt,text/plain"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="idea">Article Idea:</label>
                            <textarea
                                id="idea"
                                name="idea"
                                rows="4"
                                placeholder="Share your article idea"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="picture">Upload Picture:</label>
                            <input type="file" id="picture" name="picture" accept="image/*" />
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </section>
            </main>
        );
    }
}

export default Contribute;