//import OpenAI from "openai";

export async function fetchCareerAdvice(
    apiKey: string,
    questions: string[],
    answers: string[]
): Promise<string> { // We expect this function to return a string response from the API
    const response = await fetch('http://localhost:5000/api/career-advice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey, questions, answers }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: { advice: string } = await response.json();
    return data.advice;
}

export default fetchCareerAdvice; 