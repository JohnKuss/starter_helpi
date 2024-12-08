import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { Routes, Route, HashRouter, Link, useLocation } from "react-router-dom";
import DetailedQuestionsPage from './DetailedQuestionsPage';
import { BasicCareerAssessment } from "./BasicAssessment";
import HomePage from './HomePage';
import { Results } from "./Results";
import AboutUs from "./AboutUs";
import 'bootstrap-icons/font/bootstrap-icons.css';

// Local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [isKeySubmitted, setIsKeySubmitted] = useState<boolean>(!!prevKey); // Check if a key is already saved
  const location = useLocation();

  // Sets the local storage item to the API key the user inputted
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    setIsKeySubmitted(true); // Enable the buttons
  }

  // Updates the local state with the API key input value
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <div className="App">
      <header className="top-header">
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className={isKeySubmitted ? "" : "disabled-link"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/basicAssessment"
                className={isKeySubmitted ? "" : "disabled-link"}
                onClick={(e) => !isKeySubmitted && e.preventDefault()} // Prevent navigation
              >
                Basic Career Assessment
              </Link>
            </li>
            <li>
              <Link
                to="/detailedAssessment"
                className={isKeySubmitted ? "" : "disabled-link"}
                onClick={(e) => !isKeySubmitted && e.preventDefault()} // Prevent navigation
              >
                Detailed Career Assessment
              </Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage isKeySubmitted={isKeySubmitted} />} />
        <Route path="/basicAssessment" element={<BasicCareerAssessment />} />
        <Route path="/detailedAssessment" element={<DetailedQuestionsPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      
      {location.pathname === "/" && (
        <footer>
          <div className="api-key-container">
  <Form.Control
    type="password"
    placeholder="Insert API Key Here"
    onChange={changeKey}
    className="api-key-input"
  />
  <Button
    className="submit-button"
    onClick={handleSubmit}
    disabled={!key || key.trim() === ""} // Disable until a valid key is entered
  >
    Submit
  </Button>
</div>

        </footer>
      )}
    </div>
  );
}

export default function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
