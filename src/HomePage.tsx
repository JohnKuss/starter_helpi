import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

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
            <h3>Basic Assessment</h3>
            <p>This assessment consists of 7 straightforward questions designed to quickly gauge 
                your career preferences and suggest potential career paths. It’s 
                a great starting point to understand your professional inclinations.</p>
            <Link to="/basicAssessment" className="option-link">Start Basic Assessment</Link>
          </div>
          <div className="option">
            <h3>Detailed Assessment</h3>
            <p>This assessment features 7 in-depth questions that delve deeper into your career 
                interests and values. It aims to provide a more tailored analysis of suitable 
                career options based on your responses.</p>
            <Link to="/detailedAssessment" className="option-link">Start Detailed Assessment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;