import React from 'react';
import '../styles/au.css';

class Aboutus extends React.Component {
    render() {
        return (
            <main>
            <section className="about-us">
                <h1>About Us</h1>
                <p>
                Welcome to Dashnam Circular! We are a dedicated team committed to
                bringing you the latest news, insightful articles, and engaging
                content.
                </p>
                <div className="team">
                <div className="team-member">
                    <img src={require("../assets/dc_logo.jpeg")} alt="Person 1" />
                    <h2>Lalitputi Goswami</h2>
                    <h3>Founder & Editor</h3>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                    sed velit ullam officia quasi. Provident nemo corporis aperiam vel
                    sit!
                    </p>
                </div>
                <div className="team-member">
                    <img src={require("../assets/dc_logo.jpeg")} alt="Person 1" />
                    <h2>Lalitputi Goswami</h2>
                    <h3>Founder & Editor</h3>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                    sed velit ullam officia quasi. Provident nemo corporis aperiam vel
                    sit!
                    </p>
                </div>
                <div className="team-member">
                    <img src={require("../assets/dc_logo.jpeg")} alt="Person 1" />
                    <h2>Lalitputi Goswami</h2>
                    <h3>Founder & Editor</h3>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                    sed velit ullam officia quasi. Provident nemo corporis aperiam vel
                    sit!
                    </p>
                </div>
                </div>
            </section>
            </main>
        );
    }
}

export default Aboutus;