import React, { useState } from "react";
import { Button, Form, Alert, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchCareerAdvice } from "./API";
import "./DetailedQuestionsPage.css";

const DetailedQuestionsPage = () => {
  const totalQuestions = 7;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState({
    structuredJob: "",
    creativeJob: "",
    serviceJob: "",
    meetings: "",
    helpingCustomers: "",
    teamwork: "",
    leadership: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      question: "Do you prefer structured tasks?",
      name: "structuredJob",
      options: [
        "Very Not Like Me",
        "Not Like Me",
        "Somewhat Like Me",
        "Like Me",
        "Very Like Me",
      ],
    },
    {
      question: "Do you enjoy creative tasks?",
      name: "creativeJob",
      options: [
        "Very Not Like Me",
        "Not Like Me",
        "Somewhat Like Me",
        "Like Me",
        "Very Like Me",
      ],
    },
    {
      question: "Do you like helping customers?",
      name: "serviceJob",
      options: [
        "Very Not Like Me",
        "Not Like Me",
        "Somewhat Like Me",
        "Like Me",
        "Very Like Me",
      ],
    },
    {
      question: "Do you participate actively in meetings?",
      name: "meetings",
      options: [
        "Very Not Like Me",
        "Not Like Me",
        "Somewhat Like Me",
        "Like Me",
        "Very Like Me",
      ],
    },
    {
      question: "Do you find satisfaction in helping customers?",
      name: "helpingCustomers",
      options: [
        "Very Not Like Me",
        "Not Like Me",
        "Somewhat Like Me",
        "Like Me",
        "Very Like Me",
      ],
    },
    {
      question: "Do you prefer working in teams?",
      name: "teamwork",
      options: [
        "Very Not Like Me",
        "Not Like Me",
        "Somewhat Like Me",
        "Like Me",
        "Very Like Me",
      ],
    },
    {
      question: "Do you enjoy taking charge of projects?",
      name: "leadership",
      options: [
        "Very Not Like Me",
        "Not Like Me",
        "Somewhat Like Me",
        "Like Me",
        "Very Like Me",
      ],
    },
  ];

  const handleAnswerChange = (name: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const submitAnswers = async () => {
    const apiKey = JSON.parse(localStorage.getItem("MYKEY") || '""') as string;
    const answerValues = Object.values(answers);
    setLoading(true);
    try {
      const response = await fetchCareerAdvice(
        apiKey,
        questions.map((q) => q.question),
        answerValues
      );
      navigate("/results", { state: { response } });
    } catch (error) {
      console.error("Failed to fetch career advice:", error);
    } finally {
      setLoading(false);
    }
  };

  const allQuestionsCompleted = Object.values(answers).every((answer) => answer !== "");
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="DetailedPage">
      <h1 className="page-title">
        <i className="bi bi-robot"></i> Detailed Career Assessment
      </h1>
      {loading && (
        <div className="loading-screen">
          <i className="bi bi-robot spinner-icon"></i> {}
          <h3>Hang tight! MechaMatcher is finding your career match...</h3>
        </div>
      )}
      <div className="description-card">
        <p className="description">
          The Detailed Career Assessment provides an in-depth exploration of
          potential career paths tailored to your interests and values. By
          answering a series of comprehensive questions, you will receive
          personalized insights and recommendations to align with your
          aspirations and goals.
        </p>
        <p className="time-estimate">Estimated Completion Time: 3–5 minutes</p>
      </div>
      <ProgressBar
        now={((currentQuestionIndex + 1) / totalQuestions) * 100}
        label={`Progress: ${currentQuestionIndex + 1} of ${totalQuestions}`}
        className="progress"
      />
      <Form>
        <div className="question-box">
          <Form.Label>{currentQuestion.question}</Form.Label>
          <div className="option-group">
            {currentQuestion.options.map((option) => (
              <Form.Check
                key={option}
                type="radio"
                label={option}
                name={currentQuestion.name}
                value={option}
                onChange={() =>
                  handleAnswerChange(currentQuestion.name, option)
                }
                checked={
                  answers[currentQuestion.name as keyof typeof answers] ===
                  option
                }
              />
            ))}
          </div>
        </div>
      </Form>
      {allQuestionsCompleted && currentQuestionIndex === totalQuestions - 1 && (
  <div className="completion-message">
    <Alert variant="success" className="mt-3">
      All questions have been completed! Click 'Submit' to view your results.
    </Alert>
  </div>
)}
      <div className="button-group">
        <Button
          variant="secondary"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        {currentQuestionIndex < totalQuestions - 1 ? (
          <Button
            variant="primary"
            onClick={handleNext}
            disabled={
              !answers[currentQuestion.name as keyof typeof answers]
            }
          >
            Next
          </Button>
        ) : (
          <Button
            variant="success"
            onClick={submitAnswers}
            disabled={!allQuestionsCompleted}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default DetailedQuestionsPage;
