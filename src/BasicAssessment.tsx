import React, { useState } from "react";
import { Alert, Button, Form, ProgressBar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./BasicAssessment.css";

export function BasicCareerAssessment(): React.JSX.Element {
  const totalQuestions = 7;
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);
  const [allQuestionsCompleted, setAllQuestionsCompleted] = useState(false);
  const [paused, setPaused] = useState<boolean>(false);

  // State to track if each question is answered
  const [answers, setAnswers] = useState({
    idealEnvironment: '',
    preferredWorkday: '',
    stabilityImportance: '',
    problemSolvingStyle: '',
    biggestMotivator: '',
    handlePressure: '',
    travelPreference: ''
  });

  const handleAnswerChange = (name: string, value: string) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [name]: value
    }));

    if (!answers[name as keyof typeof answers]) {
      setAnsweredQuestions(prev => prev + 1);
    }
    if (answeredQuestions + 1 === totalQuestions) {
      setAllQuestionsCompleted(true);
    }
  };

  function updatePaused(): void {
    setPaused(!paused);
  }

  return (
    <div className="basicAssessment">
      <h1 className="page-title">Basic Questions Assessment</h1>
      <div>
        Basic Career Assessment: Provides a series of more basic questions and generates results for potential careers.
      </div>
      <p>Estimated time: 5-10 minutes</p>

      {/* Progress Bar */}
      <ProgressBar
        now={(answeredQuestions / totalQuestions) * 100}
        label={`Progress: ${answeredQuestions} of ${totalQuestions}`}
        className="progress"
      />

      {/* Questions form */}
      <Form>
        <div className="question-box">
          <Form.Label>1. Ideal work environment?</Form.Label>
          <div className="option-group">
            {["Office", "Remote", "Hybrid", "Outdoor", "Other"].map(answer => (
              <Form.Check
                inline
                type="radio"
                name="idealEnvironment"
                key={answer}
                label={answer}
                value={answer}
                disabled={paused}
                onChange={() => handleAnswerChange("idealEnvironment", answer)}
                checked={answers.idealEnvironment === answer}
              />
            ))}
          </div>
        </div>

        <div className="question-box">
          <Form.Label>2. Preferred workday?</Form.Label>
          <div className="option-group">
            {["Solo Tasks", "Team projects", "Client interactions", "Leading projects", "Other"].map(answer => (
              <Form.Check
                inline
                type="radio"
                name="preferredWorkday"
                key={answer}
                label={answer}
                value={answer}
                disabled={paused}
                onChange={() => handleAnswerChange("preferredWorkday", answer)}
                checked={answers.preferredWorkday === answer}
              />
            ))}
          </div>
        </div>

        <div className="question-box">
          <Form.Label>3. Job stability importance?</Form.Label>
          <Form.Select
            onChange={(e) => handleAnswerChange("stabilityImportance", e.target.value)}
            disabled={paused}
            value={answers.stabilityImportance}
          >
            <option value="">Select...</option>
            {["1", "2", "3", "4", "5"].map(answer => (
              <option key={answer} value={answer}>{answer}</option>
            ))}
          </Form.Select>
        </div>

        <div className="question-box">
          <Form.Label>4. Problem-Solving Style?</Form.Label>
          <div className="option-group">
            {["Detailed analysis", "Team brainstorm", "Intuition", "Structured methods", "Other"].map(answer => (
              <Form.Check
                inline
                type="radio"
                name="problemSolvingStyle"
                key={answer}
                label={answer}
                value={answer}
                disabled={paused}
                onChange={() => handleAnswerChange("problemSolvingStyle", answer)}
                checked={answers.problemSolvingStyle === answer}
              />
            ))}
          </div>
        </div>

        <div className="question-box">
          <Form.Label>5. Biggest motivator?</Form.Label>
          <div className="option-group">
            {["Work-life balance", "Salary", "Growth", "Helping others", "Creativity", "Other"].map(answer => (
              <Form.Check
                inline
                type="radio"
                name="biggestMotivator"
                key={answer}
                label={answer}
                value={answer}
                disabled={paused}
                onChange={() => handleAnswerChange("biggestMotivator", answer)}
                checked={answers.biggestMotivator === answer}
              />
            ))}
          </div>
        </div>

        <div className="question-box">
          <Form.Label>6. How do you handle pressure?</Form.Label>
          <div className="option-group">
            {["I thrive", "I stay calm", "I avoid it", "I feel overwhelmed"].map(answer => (
              <Form.Check
                inline
                type="radio"
                name="handlePressure"
                key={answer}
                label={answer}
                value={answer}
                disabled={paused}
                onChange={() => handleAnswerChange("handlePressure", answer)}
                checked={answers.handlePressure === answer}
              />
            ))}
          </div>
        </div>

        <div className="question-box">
          <Form.Label>7. How do you feel about travel for work?</Form.Label>
          <div className="option-group">
            {["Love it", "Okay with it", "Prefer to stay local"].map(answer => (
              <Form.Check
                inline
                type="radio"
                name="travelPreference"
                key={answer}
                label={answer}
                value={answer}
                disabled={paused}
                onChange={() => handleAnswerChange("travelPreference", answer)}
                checked={answers.travelPreference === answer}
              />
            ))}
          </div>
        </div>
      </Form>

      {/* Feedback message for completion */}
      <div className="basicAssessment-content">
      {allQuestionsCompleted && (
        <Alert variant="success" className="mt-3">
          All questions have been completed! Click 'Get Answer' to submit your responses.
        </Alert>
      )}
      </div>

      <div className="button-group">
        <Button variant="secondary" disabled={!paused} onClick={updatePaused}>Resume Button</Button>
        <Button variant="secondary" disabled={paused} onClick={updatePaused}>Pause Button</Button>
      </div>
      {/* "Get Answer" Link button */}
      <Link
          to="/results"
          className="result-link"
          style={{ pointerEvents: allQuestionsCompleted ? 'auto' : 'none', opacity: allQuestionsCompleted ? 1 : 0.5 }}
        >
          Get Answer
      </Link>

      {/*<Link to="/results" className="result-link">Get Answer</Link>*/}
    </div>
  );
}

export default BasicCareerAssessment;
