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
  //Array of questions.
  const basicQuestions = ["I prefer a structured work enviroment.","I am fine traveling for work.",
    "I like working with others.","I am a good leader.","I prefer a creative job.",
    "I would prefer to on-site.","I deal well with meetings and other formalities."];
  //Array of answers.
  const basicAnswers = ["Very not like me","Not like me","Somewhat like me","Like me","Very like me"];
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
        {basicQuestions.map((question:string) => <div>
          {question+" "}
          {basicAnswers.map((answer:string) => 
            <Form.Check 
            inline
            type="radio"
            name={question}
            label={answer}
            />
            )}
          </div> )}
      {/* Not functional yet */}
      <Button variant="secondary">Pause Button</Button>
    </div>
  );
}
