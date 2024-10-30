import React, { useState } from "react";
import { Button, Form, ProgressBar } from "react-bootstrap";

export function BasicCareerAssessment(): React.JSX.Element {
  // Define the total number of questions (7 in this case)
  const totalQuestions = 7;

  // State to track the number of answered questions
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);

  // Placeholder for a function to update the number of answered questions
  const incrementAnsweredQuestions = () => {
    setAnsweredQuestions(prev => prev + 1);
  };
  
  return (
    <div className="basicAssessment">
      <h1>Basic Career Assessment</h1>
      <div>
        Basic Career Assessment: Provides a series of more basic questions and generates results for potential careers.
      </div>
      <p>Estimated time: 5-10 minutes</p>

      {/* Progress Bar */}
      <ProgressBar
        now={(answeredQuestions / totalQuestions) * 100}
        label={`${Math.round((answeredQuestions / totalQuestions) * 100)}%`}
      />
      <p>Progress: {answeredQuestions}/{totalQuestions} questions answered</p>

      {/* You can add questions later and call incrementAnsweredQuestions when a question is answered */}
      <Form.Group controlId="idealEnvironment">
        <Form.Label>1. Ideal work enviroment?</Form.Label>
        {["Office","Remote","Hybrid","Outdoor","Other"].map((answer: string) => <Form.Check
        inline
        type="radio"
        name="question1Answer"
        key={answer}
        label={answer}
        value={answer}
        />)}
      </Form.Group>
      <Form.Group controlId="preferredWorkday">
        <Form.Label>2. Preferred workday?</Form.Label>
        {["Solo Tasks","Team projects","Client interactions","Leading projects","Other"].map((answer:string) => <Form.Check
        inline
        type="radio"
        name="question1Answer"
        key={answer}
        label={answer}
        value={answer}
        />)}
      </Form.Group>
      <Form.Group controlId="stabilityImportance">
        <Form.Label>3. Job stability importance?</Form.Label>
        <></>
      </Form.Group>
      <Form.Group>
        <Form.Label>4. Problem-Solving Style?</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>5. Biggest motivator?</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>6. How do you handle pressure?</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>7. How do you feel about travel for work?</Form.Label>
      </Form.Group>
      {/* Not functional yet */}
      <Button variant="secondary">Pause Button</Button>
    </div>
  );
}
