import React, { useState } from "react";
import { Button, Form, ProgressBar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./BasicAssessment.css";

export function BasicCareerAssessment(): React.JSX.Element {
  const totalQuestions = 7;
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  
  type QuestionKey = 'question1' | 'question2' | 'question3' | 'question4' | 'question5' | 'question6' | 'question7';

  const [questionAnswered, setQuestionAnswered] = useState<Record<QuestionKey, boolean>>({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    question6: false,
    question7: false
  });

  const handleAnswerChange = (questionKey: QuestionKey) => {
    if (!questionAnswered[questionKey]) {
      setQuestionAnswered(prevState => ({ ...prevState, [questionKey]: true }));
      setAnsweredQuestions(prev => prev + 1);
    }
  };

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

      <ProgressBar
        now={(answeredQuestions / totalQuestions) * 100}
        label={`${Math.round((answeredQuestions / totalQuestions) * 100)}%`}
      />
      <p>Progress: {answeredQuestions}/{totalQuestions} questions answered</p>

      <div className="question-box">
        <Form.Label>1. Ideal work environment?</Form.Label>
        <div className="option-group">
          {["Office", "Remote", "Hybrid", "Outdoor", "Other"].map((answer) => (
            <Form.Check
              inline
              type="radio"
              name="question1Answer"
              key={answer}
              label={answer}
              value={answer}
              disabled={paused}
              onChange={() => handleAnswerChange("question1")}
            />
          ))}
        </div>
      </div>

      <div className="question-box">
        <Form.Label>2. Preferred workday?</Form.Label>
        <div className="option-group">
          {["Solo Tasks", "Team projects", "Client interactions", "Leading projects", "Other"].map((answer) => (
            <Form.Check
              inline
              type="radio"
              name="question2Answer"
              key={answer}
              label={answer}
              value={answer}
              disabled={paused}
              onChange={() => handleAnswerChange("question2")}
            />
          ))}
        </div>
      </div>

      <div className="question-box">
        <Form.Label>3. Job stability importance?</Form.Label>
        <Form.Select 
          onChange={(e) => {
            if (e.target.value) handleAnswerChange("question3");
          }} 
          disabled={paused}
        >
          <option value="">Select...</option>
          {["1", "2", "3", "4", "5"].map((answer) => (
            <option key={answer} value={answer}>{answer}</option>
          ))}
        </Form.Select>
      </div>

      <div className="question-box">
        <Form.Label>4. Problem-Solving Style?</Form.Label>
        <div className="option-group">
          {["Detailed analysis", "Team brainstorm", "Intuition", "Structured methods", "Other"].map((answer) => (
            <Form.Check
              inline
              type="radio"
              name="question4Answer"
              key={answer}
              label={answer}
              value={answer}
              disabled={paused}
              onChange={() => handleAnswerChange("question4")}
            />
          ))}
        </div>
      </div>

      <div className="question-box">
        <Form.Label>5. Biggest motivator?</Form.Label>
        <div className="option-group">
          {["Work-life balance", "Salary", "Growth", "Helping others", "Creativity", "Other"].map((answer) => (
            <Form.Check
              inline
              type="radio"
              name="question5Answer"
              key={answer}
              label={answer}
              value={answer}
              disabled={paused}
              onChange={() => handleAnswerChange("question5")}
            />
          ))}
        </div>
      </div>

      <div className="question-box">
        <Form.Label>6. How do you handle pressure?</Form.Label>
        <div className="option-group">
          {["I thrive", "I stay calm", "I avoid it", "I feel overwhelmed"].map((answer) => (
            <Form.Check
              inline
              type="radio"
              name="question6Answer"
              key={answer}
              label={answer}
              value={answer}
              disabled={paused}
              onChange={() => handleAnswerChange("question6")}
            />
          ))}
        </div>
      </div>

      <div className="question-box">
        <Form.Label>7. How do you feel about travel for work?</Form.Label>
        <div className="option-group">
          {["Love it", "Okay with it", "Prefer to stay local"].map((answer) => (
            <Form.Check
              inline
              type="radio"
              name="question7Answer"
              key={answer}
              label={answer}
              value={answer}
              disabled={paused}
              onChange={() => handleAnswerChange("question7")}
            />
          ))}
        </div>
      </div>

      <div className="button-group">
        <Button variant="secondary" disabled={!paused} onClick={updatePaused}>Resume Button</Button>
        <Button variant="secondary" disabled={paused} onClick={updatePaused}>Pause Button</Button>
      </div>

      <Link to="/results" className="result-link">Get Answer</Link>
    </div>
  );
}
