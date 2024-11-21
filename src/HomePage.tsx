import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>CareerBot Assistant</h1>
      </header>
      <section className="quiz-options">
        <h2>Choose Your Assessment</h2>
        <div className="options-container">
          <div className="option">
            <h3>🤖 Basic Assessment</h3>
            <p>This quick assessment uses 7 straightforward questions to analyze your career preferences and suggest potential paths. Perfect for a fast start!</p>
            <Link to="/basicAssessment" className="option-link">Start Basic Assessment</Link>
          </div>
          <div className="option">
            <h3>🚀 Detailed Assessment</h3>
            <p>Discover tailored career options with our in-depth assessment. Answer 7 detailed questions that delve into your interests and values.</p>
            <Link to="/detailedAssessment" className="option-link">Start Detailed Assessment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
