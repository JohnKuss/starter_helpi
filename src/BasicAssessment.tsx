import React, { useState } from "react";
import { Alert, Button, Form, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchCareerAdvice } from "./API";
import "./BasicAssessment.css";

export function BasicCareerAssessment(): React.JSX.Element {
  const totalQuestions = 7;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState({
    idealEnvironment: "",
    preferredWorkday: "",
    stabilityImportance: "",
    problemSolvingStyle: "",
    biggestMotivator: "",
    handlePressure: "",
    travelPreference: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      question: "Ideal work environment?",
      name: "idealEnvironment",
      options: ["Office", "Remote", "Hybrid", "Outdoor", "Other"],
    },
    {
      question: "Preferred workday?",
      name: "preferredWorkday",
      options: [
        "Solo Tasks",
        "Team projects",
        "Client interactions",
        "Leading projects",
        "Other",
      ],
    },
    {
      question: "Job stability importance?",
      name: "stabilityImportance",
      options: ["1", "2", "3", "4", "5"],
      type: "select",
    },
    {
      question: "Problem-Solving Style?",
      name: "problemSolvingStyle",
      options: [
        "Detailed analysis",
        "Team brainstorm",
        "Intuition",
        "Structured methods",
        "Other",
      ],
    },
    {
      question: "Biggest motivator?",
      name: "biggestMotivator",
      options: [
        "Work-life balance",
        "Salary",
        "Growth",
        "Helping others",
        "Creativity",
        "Other",
      ],
    },
    {
      question: "How do you handle pressure?",
      name: "handlePressure",
      options: [
        "I thrive",
        "I stay calm",
        "I avoid it",
        "I feel overwhelmed",
      ],
    },
    {
      question: "How do you feel about travel for work?",
      name: "travelPreference",
      options: ["Love it", "Okay with it", "Prefer to stay local"],
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
    <div className="basicAssessment">
      <h1 className="page-title">
        <i className="bi bi-robot"></i> Basic Career Assessment
      </h1>

      {loading && (
        <div className="loading-screen">
          <i className="bi bi-robot spinner-icon"></i>
          <h3>Hang tight! MechaMatcher is finding your career match...</h3>
        </div>
      )}

      <div className="description-card">
        <p className="description">
          The Basic Career Assessment helps you explore potential career paths
          through a series of focused, easy-to-answer questions. This quick
          assessment provides insights into your preferences and strengths,
          offering tailored recommendations to guide your career decisions.
        </p>
        <p className="time-estimate">Estimated Completion Time: 2–3 minutes</p>
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
            {currentQuestion.type === "select" ? (
              <Form.Select
                onChange={(e) =>
                  handleAnswerChange(currentQuestion.name, e.target.value)
                }
                value={answers[currentQuestion.name as keyof typeof answers]}
              >
                <option value="">Select...</option>
                {currentQuestion.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            ) : (
              currentQuestion.options.map((option) => (
                <Form.Check
                  inline
                  type="radio"
                  name={currentQuestion.name}
                  key={option}
                  label={option}
                  value={option}
                  onChange={() =>
                    handleAnswerChange(currentQuestion.name, option)
                  }
                  checked={
                    answers[currentQuestion.name as keyof typeof answers] ===
                    option
                  }
                />
              ))
            )}
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
}

export default BasicCareerAssessment;
