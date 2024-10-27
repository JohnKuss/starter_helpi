import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Create this CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>The Career Helpi</h1>
      </header>
      <section className="quiz-options">
        <h2>Quiz Options</h2>
        <div className="options-container">
          <div className="option">
            <h3>Basic Questions</h3>
            <p>Brief description of basic questions.</p>
            <Link to="/basicAssessment" className="option-link">Start Basic Assessment</Link>
          </div>
          <div className="option">
            <h3>Detailed Questions</h3>
            <p>Brief description of detailed questions.</p>
            <Link to="/detailedAssessment" className="option-link">Start Detailed Assessment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;