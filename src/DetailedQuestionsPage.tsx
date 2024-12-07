import React, { useState } from 'react';
import { Button, Form, Alert, ProgressBar } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import './DetailedQuestionsPage.css';
import { useNavigate } from 'react-router-dom';
import { fetchCareerAdvice } from './API';
interface LocationState {
  response: string;
}

const DetailedQuestionsPage = () => {
  const totalQuestions = 7; 
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [allQuestionsCompleted, setAllQuestionsCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  type Answers = {
    structuredJob: string;
    creativeJob: string;
    serviceJob: string;
    meetings: string;
    helpingCustomers: string;
    teamwork: string;
    leadership: string;
};

  
  const [answers, setAnswers] = useState<Answers>({
    structuredJob: '',
    creativeJob: '',
    serviceJob: '',
    meetings: '',
    helpingCustomers: '',
    teamwork: '',
    leadership: '',
  });

  const handleAnswerChange = (name: string, value: string) => {
    
    setAnswers(prevState => ({
      ...prevState,
      [name]: value,
    }));

    if (!answers[name as keyof typeof answers]) {
      setAnsweredQuestions(prev => prev + 1);
    }

    if (answeredQuestions + 1 === totalQuestions) {
      setAllQuestionsCompleted(true);
    }
  };

  
  const submitAnswers = async () => {
    const apiKey = JSON.parse(localStorage.getItem("MYKEY") || '""') as string; // Get the API key from localStorage
    const questions = [
        "Do you prefer structured tasks?",
        "Do you enjoy creative tasks?",
        "Do you like helping customers?",
        "Do you participate actively in meetings?",
        "Do you find satisfaction in helping customers?",
        "Do you prefer working in teams?",
        "Do you enjoy taking charge of projects?",
    ];

    const answerValues = Object.values(answers);
    setLoading(true);
    try {
      const response = await fetchCareerAdvice(apiKey, questions, answerValues);
      navigate("/results", { state: { response } as LocationState });
  } catch (error) {
      console.error("Failed to fetch career advice:", error);
    } finally {
      setLoading(false);  // Set loading to false after the request is complete
    }
};

  return (
    <div className="DetailedPage">
      <h1 className="page-title">Detailed Career Assessment</h1>
      <div className="DetailedPage-content">
              {/* Loading Screen */}
      {loading && (
        <div className="loading-screen">
          <h3>Loading, please wait...</h3>
          <div className="spinner"></div>
        </div>
      )}
      <div className="description-card">
        <p className="description">
          The Detailed Career Assessment provides an in-depth exploration of potential career paths tailored to your interests and values. By answering a series of comprehensive questions, you will receive personalized insights and recommendations to align with your aspirations and goals.
        </p>
        <p className="time-estimate">Estimated Completion Time: 3–5 minutes</p>
      </div>

        {/* Progress Bar */}
        <ProgressBar
          now={(answeredQuestions / totalQuestions) * 100}
          label={`Progress: ${answeredQuestions} of ${totalQuestions}`}
          className="progress"
        />

        {/* Questions form */}
        <Form>
          <div className="question-box">
            <Form.Label>1. I prefer a structured job environment.</Form.Label>
            <div className="option-group">
              {['Very Not Like Me', 'Not Like Me', 'Somewhat Like Me', 'Like Me', 'Very Like Me'].map(option => (
                <Form.Check
                  key={option}
                  type="radio"
                  label={option}
                  name="structuredJob"
                  value={option}
                  onChange={() => handleAnswerChange("structuredJob", option)}
                  checked={answers.structuredJob === option}
                />
              ))}
            </div>
          </div>

          <div className="question-box">
            <Form.Label>2. I would like a creative job.</Form.Label>
            <div className="option-group">
              {['Very Not Like Me', 'Not Like Me', 'Somewhat Like Me', 'Like Me', 'Very Like Me'].map(option => (
                <Form.Check
                  key={option}
                  type="radio"
                  label={option}
                  name="creativeJob"
                  value={option}
                  onChange={() => handleAnswerChange("creativeJob", option)}
                  checked={answers.creativeJob === option}
                />
              ))}
            </div>
          </div>

          <div className="question-box">
            <Form.Label>3. I would like a service job.</Form.Label>
            <div className="option-group">
              {['Very Not Like Me', 'Not Like Me', 'Somewhat Like Me', 'Like Me', 'Very Like Me'].map(option => (
                <Form.Check
                  key={option}
                  type="radio"
                  label={option}
                  name="serviceJob"
                  value={option}
                  onChange={() => handleAnswerChange("serviceJob", option)}
                  checked={answers.serviceJob === option}
                />
              ))}
            </div>
          </div>

          <div className="question-box">
            <Form.Label>4. I like jobs with a lot of meetings.</Form.Label>
            <div className="option-group">
              {['Very Not Like Me', 'Not Like Me', 'Somewhat Like Me', 'Like Me', 'Very Like Me'].map(option => (
                <Form.Check
                  key={option}
                  type="radio"
                  label={option}
                  name="meetings"
                  value={option}
                  onChange={() => handleAnswerChange("meetings", option)}
                  checked={answers.meetings === option}
                />
              ))}
            </div>
          </div>

          <div className="question-box">
            <Form.Label>5. I like helping customers.</Form.Label>
            <div className="option-group">
              {['Very Not Like Me', 'Not Like Me', 'Somewhat Like Me', 'Like Me', 'Very Like Me'].map(option => (
                <Form.Check
                  key={option}
                  type="radio"
                  label={option}
                  name="helpingCustomers"
                  value={option}
                  onChange={() => handleAnswerChange("helpingCustomers", option)}
                  checked={answers.helpingCustomers === option}
                />
              ))}
            </div>
          </div>

          <div className="question-box">
            <Form.Label>6. I work well in teams.</Form.Label>
            <div className="option-group">
              {['Very Not Like Me', 'Not Like Me', 'Somewhat Like Me', 'Like Me', 'Very Like Me'].map(option => (
                <Form.Check
                  key={option}
                  type="radio"
                  label={option}
                  name="teamwork"
                  value={option}
                  onChange={() => handleAnswerChange("teamwork", option)}
                  checked={answers.teamwork === option}
                />
              ))}
            </div>
          </div>

          <div className="question-box">
            <Form.Label>7. I am cut out for a leadership position.</Form.Label>
            <div className="option-group">
              {['Very Not Like Me', 'Not Like Me', 'Somewhat Like Me', 'Like Me', 'Very Like Me'].map(option => (
                <Form.Check
                  key={option}
                  type="radio"
                  label={option}
                  name="leadership"
                  value={option}
                  onChange={() => handleAnswerChange("leadership", option)}
                  checked={answers.leadership === option}
                />
              ))}
            </div>
          </div>
        </Form>

        {/* Feedback message for completion */}
        {allQuestionsCompleted && (
          <Alert variant="success" className="mt-3">
            All questions have been completed! Click 'Get Answer' to submit your responses.
          </Alert>
        )}

        <div className="button-group">
          <Button variant="secondary" onClick={submitAnswers} disabled={!allQuestionsCompleted}>Get Answer</Button>
        </div>
        {/* "Get Answer" Link button */}
         {/*}       <Link
          to="/results"
          className="result-link"
          style={{ pointerEvents: allQuestionsCompleted ? 'auto' : 'none', opacity: allQuestionsCompleted ? 1 : 0.5 }}
        >
          Get Answer
        </Link>*/}

        {}
        {/*<Link to="/results" className="result-link">Get Answer</Link>*/}
      </div>
    </div>
  );
};

export default DetailedQuestionsPage;
