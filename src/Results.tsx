// import React from 'react';

// //Placeholder for results page
// export function Results(): React.JSX.Element {
//     return (
//         <div>
//             <h1>Results</h1>
//         </div>
//     )
// }
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Results.css';

interface LocationState {
    response: string; // The expected type for the response
}

export const Results = () => {
    const location = useLocation();
    const state = location.state as LocationState | undefined;
    const response = state?.response;

    // Split the response by double newlines to separate the paragraphs
    const paragraphs = response ? response.split('\n\n') : [];

    return (
        <div className="results-container">
            <h1 className="results-title">Career Path Recommendations</h1>
            <div className="results-box">
                {paragraphs.length > 0 ? (
                    paragraphs.map((paragraph, index) => (
                        <p key={index} className="result-paragraph">
                            {paragraph}
                        </p>
                    ))
                ) : (
                    <p>No results available</p>
                )}
            </div>
        </div>
    );
};

export default Results;

