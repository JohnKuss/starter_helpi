import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export function DetailedAssessment(): React.JSX.Element {
  const [answers, setAnswers] = useState({
    structuredJob: '',
    creativeJob: '',
    serviceJob: '',
    meetings: '',
    helpingCustomers: '',
    teamwork: '',
    leadership: '',
  });

  // Handler for radio button change
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setAnswers(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit() {
    console.log('Detailed Career Assessment Answers:', answers);
    // Logic to process the answers
  }

  return (
    <div className="DetailedAssessment">
      <header>Detailed Career Assessment</header>
      <Form>
        {/* First Question */}
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

        {/* Second Question */}
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

        {/* Third Question */}
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

        {/* Fourth Question */}
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

        {/* Fifth Question */}
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

        {/* Sixth Question */}
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

        {/* Seventh Question */}
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

        <Button onClick={handleSubmit}>Get Answer</Button>
      </Form>
    </div>
  );
}
