import React, { useState } from "react";
import { Button, Form, ProgressBar } from "react-bootstrap";

export function BasicCareerAssessment(): React.JSX.Element {
  // Define the total number of questions (7 in this case)
  const totalQuestions = 7;

  // State to track the number of answered questions
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);
  
  // Placeholder for a function to update the number of answered questions
  /*const incrementAnsweredQuestions = () => {
    setAnsweredQuestions(prev => prev + 1);
  };*/

  
  //Boolean state for whether quiz is paused
  const [paused, setPaused] = useState<boolean>(false);

  //Updates paused state
  function updatePaused(): void {
    setPaused(!paused);
  }
  
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
        disabled={paused}
        //onClick calls setAnsweredQuestons arbitrarily as placeholder.
        onClick={() => setAnsweredQuestions(0)}
        />)}
      </Form.Group>
      <Form.Group controlId="preferredWorkday">
        <Form.Label>2. Preferred workday?</Form.Label>
        {["Solo Tasks","Team projects","Client interactions","Leading projects","Other"].map((answer:string) => <Form.Check
        inline
        type="radio"
        name="question2Answer"
        key={answer}
        label={answer}
        value={answer}
        disabled={paused}
        />)}
      </Form.Group>
      <Form.Group controlId="stabilityImportance">
        <Form.Label>3. Job stability importance?</Form.Label>
        <Form.Select>
          {["","1","2","3","4","5","6","7","8","9","10"].map((answer: string) =>
          <option key={answer} value={answer}>{answer}</option>)}
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>4. Problem-Solving Style?</Form.Label>
        {["Detailed analysis","Team brainstorm","Intuition","Structured methods","Other"].map((answer:string) => <Form.Check
        inline
        type="radio"
        name="question4Answer"
        key={answer}
        label={answer}
        value={answer}
        disabled={paused}
        />)}
      </Form.Group>
      <Form.Group>
        <Form.Label>5. Biggest motivator?</Form.Label>
        {["Work-life balance","Salary","Growth","Helping others","Creativity","Other"].map((answer:string) => <Form.Check
        inline
        type="radio"
        name="question5Answer"
        key={answer}
        label={answer}
        value={answer}
        disabled={paused}
        />)}
      </Form.Group>
      <Form.Group>
        <Form.Label>6. How do you handle pressure?</Form.Label>
        {["I thrive","I stay calm","I avoid it","I feel overwhelmed"].map((answer:string) => <Form.Check
        inline
        type="radio"
        name="question6Answer"
        key={answer}
        label={answer}
        value={answer}
        disabled={paused}
        />)}
      </Form.Group>
      <Form.Group>
        <Form.Label>7. How do you feel about travel for work?</Form.Label>
        {["Love it","Okay with it","Prefer to stay local"].map((answer:string) => <Form.Check
        inline
        type="radio"
        name="question7Answer"
        key={answer}
        label={answer}
        value={answer}
        disabled={paused}
        />)}
      </Form.Group>
      <div>
        <Button variant = "secondary" disabled={!(paused)} onClick={updatePaused}>Resume Button</Button>
        <Button variant="secondary" disabled={paused} onClick={updatePaused}>Pause Button</Button>
      </div>
      
    </div>
  );
}
