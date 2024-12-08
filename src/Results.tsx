import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Results.css";

interface LocationState {
    response: string; 
}

export const Results = () => {
    const location = useLocation();
    const state = location.state as LocationState | undefined;
    const response = state?.response;

    // Feedback state for visual indicator
    const [showFeedback, setShowFeedback] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFeedback(false);
        }, 6000); 
        return () => clearTimeout(timer);
    }, []);

    // Split the response by double newlines to separate the careers
    const careers = response
        ? response.split("\n\n").map((paragraph) => {
              const parts = paragraph.split(". ");
              const title = parts[0]?.replace(/Career \d+: /, "").trim();
              const description = parts[1]?.trim();
              const explanation = parts[2]?.trim();
              const skills = parts[3]?.replace("Skills useful for this role include", "").trim();
              const linkMatch = paragraph.match(/\((.*?)\)/);
              
              return {
                  title,
                  description,
                  explanation,
                  skills,
                  link: linkMatch ? linkMatch[1] : null,
              };
          })
        : [];

    return (
        <div className="results-container">
            {showFeedback && (
                <div className="feedback-message">
                    <i className="bi bi-robot"></i> <strong>MechaMatcher says:</strong> "Response processed successfully!"
                </div>
            )}
            <h1 className="results-title">
                Your Career Path Recommendations <i className="bi bi-robot"></i>
            </h1>
            <div className="results-grid">
                {careers.length > 0 ? (
                    careers.map((career, index) => (
                        <div key={index} className="results-card">
                            <h2 className="card-title">{career.title}</h2>
                            <p className="card-description">{career.description}</p>
                            <p className="card-explanation">{career.explanation}</p>
                            <p className="card-skills">
                                <strong>Skills:</strong> {career.skills}
                            </p>
                            {career.link && (
                                <a
                                    href={career.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-button"
                                >
                                    Learn More
                                </a>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No results available</p>
                )}
            </div>
        </div>
    );
};

export default Results;
