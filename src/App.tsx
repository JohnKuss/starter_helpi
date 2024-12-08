import DetailedQuestionsPage from './DetailedQuestionsPage';
import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { Routes, Route, HashRouter, Link, useLocation } from "react-router-dom";
import { BasicCareerAssessment } from "./BasicAssessment";
import HomePage from './HomePage';
import { Results } from "./Results";
import AboutUs from "./AboutUs";
import 'bootstrap-icons/font/bootstrap-icons.css';

// Local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); // so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); // for API key input
  const location = useLocation(); // Get the current location

  // Sets the local storage item to the API key the user inputted
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); // Reload to apply the new key
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/basicAssessment">Basic Career Assessment</Link></li>
            <li><Link to="/detailedAssessment">Detailed Career Assessment</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basicAssessment" element={<BasicCareerAssessment />} />
        <Route path="/detailedAssessment" element={<DetailedQuestionsPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>

      {/* Conditionally render the API key input form only on the Home Page */}
      {location.pathname === "/" && (
        <footer>
          <div className="api-key-container">
            <Form>
              <Form.Label>Enter API Key:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Insert API Key Here"
                onChange={changeKey}
                className="api-key-input"
              />
              <br />
              <br />
              <Button
                className="submit-button"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form>
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
