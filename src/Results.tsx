import React from "react";
import { useLocation } from "react-router-dom";
import "./Results.css";

interface LocationState {
    response: string; // The expected type for the response
}

export const Results = () => {
    const location = useLocation();
    const state = location.state as LocationState | undefined;
    const response = state?.response;

    // Split the response by double newlines to separate the careers
    const careers = response
        ? response.split("\n\n").map((paragraph) => {
              const parts = paragraph.split('. '); // Split by ". "
              const title = parts[0]?.replace(/Career \d+: /, '').trim(); // Remove "Career #" from the title
              const description = parts[1]?.trim(); // The second sentence as description
              const explanation = parts[2]?.trim(); // New: Third sentence explaining why it suits the user
              const skills = parts[3]?.replace("Skills useful for this role include", "").trim(); // Clean up skills text
              const linkMatch = paragraph.match(/\((.*?)\)/); // Extract the URL inside parentheses
              
              return {
                  title,
                  description,
                  explanation, // Include the explanation field
                  skills,
                  link: linkMatch ? linkMatch[1] : null, // Extract the link, if present
              };
          })
        : [];

    return (
        <div className="results-container">
            <h1 className="results-title">Your Career Path Recommendations <i className="bi bi-robot"></i></h1>
            <div className="results-grid">
                {careers.length > 0 ? (
                    careers.map((career, index) => (
                        <div key={index} className="results-card">
                            {/* Title in Neon Color and Centered */}
                            <h2 className="card-title">{career.title}</h2>

                            {/* Description in Subtle Color */}
                            <p className="card-description">{career.description}</p>

                            {/* Explanation Section */}
                            <p className="card-explanation">{career.explanation}</p>

                            {/* Skills Section */}
                            <p className="card-skills">
                                <strong>Skills:</strong> {career.skills}
                            </p>

                            {/* Learn More Button with Link */}
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
