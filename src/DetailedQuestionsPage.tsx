import React, { useState, useEffect } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import './DetailedQuestionsPage.css';

const DetailedQuestionsPage = () => {
  const [answers, setAnswers] = useState({
    structuredJob: '',
    creativeJob: '',
    serviceJob: '',
    meetings: '',
    helpingCustomers: '',
    teamwork: '',
    leadership: '',
  });

  const [allQuestionsCompleted, setAllQuestionsCompleted] = useState(false); 
  const totalQuestions = Object.keys(answers).length; 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAnswers(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    checkCompletion();
  }, [answers]); 

  const checkCompletion = () => {
    const completed = Object.values(answers).every(answer => answer !== '');
    setAllQuestionsCompleted(completed); 
  };

  const handleSubmit = () => {
    console.log('Detailed Career Assessment Answers:', answers);  
  };

  return (
    <div className="DetailedPage">
      <header className="DetailedPage-header">
        <h1>Career Helpi Quiz</h1>
      </header>
      <div className="DetailedPage-content">
        <h2>Detailed Questions</h2>
        <div>
          Detailed Career Assessment: Provides a series of more detailed questions to help generate results for your desired career.
        </div>
        <div>
          <p>Estimated time: 10-15 minutes</p>
        </div>
        {/* Questions form */}
        <Form>
          <Form.Group>
            <Form.Label>I prefer a structured job environment.</Form.Label>
            {['Very Not Like Me', 'Not Like Me', 'Somewhat Like Me', 'Like Me', 'Very Like Me'].map(option => (
              <Form.Check
                key={option}
                type="radio"
                label={option}
                name="structuredJob"
                value={option}
                onChange={handleChange}
                checked={answers.structuredJob === option}
              />
            ))}
          </Form.Group>

          <Form.Group>
            <Form.Label>I would like a creative job.</Form.Label>
            {['Very Not Like Me', 'Not Like Me', 'Somewhat Like Me', 'Like Me', 'Very Like Me'].map(option => (
              <Form.Check
                key={option}
                type="radio"
                label={option}
                name="creativeJob"
                value={option}
                onChange={handleChange}
                checked={answers.creativeJob === option}
              />
            ))}
          </Form.Group>

          <Form.Group>
            <Form.Label>I would like a service job.</Form.Label>
            {['Very Not Like Me', 'Not Like Me', 'Somewhat Like Me', 'Like Me', 'Very Like Me'].map(option => (
              <Form.Check
                key={option}
                type="radio"
                label={option}
                name="serviceJob"
                value={option}
                onChange={handleChange}
                checked={answers.serviceJob === option}
              />
            ))}
          </Form.Group>

          <Form.Group>
            <Form.Label>I like jobs with a lot of meetings.</Form.Label>
            {['Very Not Like Me', 'Not Like Me', 'Somewhat Like Me', 'Like Me', 'Very Like Me'].map(option => (
              <Form.Check
                key={option}
                type="radio"
                label={option}
                name="meetings"
                value={option}
                onChange={handleChange}
                checked={answers.meetings === option}
              />
            ))}
          </Form.Group>

          <Form.Group>
            <Form.Label>I like helping customers.</Form.Label>
            {['Very Not Like Me', 'Not Like Me', 'Somewhat Like Me', 'Like Me', 'Very Like Me'].map(option => (
              <Form.Check
                key={option}
                type="radio"
                label={option}
                name="helpingCustomers"
                value={option}
                onChange={handleChange}
                checked={answers.helpingCustomers === option}
              />
            ))}
          </Form.Group>

          <Form.Group>
            <Form.Label>I work well in teams.</Form.Label>
            {['Very Not Like Me', 'Not Like Me', 'Somewhat Like Me', 'Like Me', 'Very Like Me'].map(option => (
              <Form.Check
                key={option}
                type="radio"
                label={option}
                name="teamwork"
                value={option}
                onChange={handleChange}
                checked={answers.teamwork === option}
              />
            ))}
          </Form.Group>

          <Form.Group>
            <Form.Label>I am cut out for a leadership position.</Form.Label>
            {['Very Not Like Me', 'Not Like Me', 'Somewhat Like Me', 'Like Me', 'Very Like Me'].map(option => (
              <Form.Check
                key={option}
                type="radio"
                label={option}
                name="leadership"
                value={option}
                onChange={handleChange}
                checked={answers.leadership === option}
              />
            ))}
          </Form.Group>
        </Form>

        {/* Feedback message for completion */}
        {allQuestionsCompleted && (
          <Alert variant="success" className="mt-3">
            All questions have been completed! Click 'Get Answer' to submit your responses.
          </Alert>
        )}

        <Button variant="secondary">Pause Button</Button>
        <Button
          variant="primary"
          className="get-answer-btn"
          onClick={handleSubmit}
        >
          Get Answer
        </Button>
      </div>
      <footer className="DetailedPage-footer">
        <a href="/">Home</a> | <a href="/contact">Contact</a> | <a href="/about">About Us</a>
      </footer>
    </div>
  );
};

export default DetailedQuestionsPage;
