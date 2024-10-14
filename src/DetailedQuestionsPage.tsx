import React from 'react';
import { Button } from 'react-bootstrap';
import './DetailedQuestionsPage.css';

const DetailedPage = () => {
  return (
    <div className="DetailedPage">
      <header className="DetailedPage-header">
        <h1>Career Helpi Quiz</h1>
      </header>
      <div className="DetailedPage-content">
        <h2>Detailed Questions</h2>

        <div>
          <p>Estimated time: 10-15 minutes</p>
        </div>

        {/* Placeholder for detailed questions form */}
        <div className="placeholder">
          <p>Placeholder for questions</p>
        </div>

        <Button variant="primary" className="get-answer-btn" disabled>
          Get Answer
        </Button>
      </div>
      <footer className="DetailedPage-footer">
        <a href="/">Home</a> | <a href="/contact">Contact</a> | <a href="/about">About Us</a>
      </footer>
    </div>
  );
};

export default DetailedPage;
export {};