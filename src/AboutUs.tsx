import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Get to know our team and what drives our mission.</p>
      </header>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
        At <strong> MechaMatcher <i className="bi bi-robot"></i> </strong>, our mission is to help individuals discover career paths 
    that align with their skills, values, and interests. By leveraging technology and data-driven insights, 
    we aim to empower users to make informed decisions about their future.
        </p>
      </section>

      {/* Team Members Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-container">
        <div className="team-member">
            <h3>John Kuss</h3>
            <p>Project Manager</p>
            <p>Email: <a href="mailto:johnkuss@udel.edu">johnkuss@udel.edu</a></p>
          </div>
          <div className="team-member">
            <h3>Robert Kuss</h3>
            <p>Email: <a href="mailto:robertjk@udel.edu">robertjk@udel.edu</a></p>
          </div>
          <div className="team-member">
            <h3>Layan Almutairi</h3>
            <p>Email: <a href="mailto:layanm@udel.edu">layanm@udel.edu</a></p>
          </div>
          <div className="team-member">
            <h3>Lena Alrowais</h3>
            <p>Email: <a href="mailto:lenamoha@udel.edu">lenamoha@udel.edu</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
