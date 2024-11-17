//import OpenAI from "openai";

//This function was initially coded by Layan, then put into ChatGPT with the errors it was giving to troubleshoot.
export async function fetchCareerAdvice(
    apiKey: string,
    questions: string[],
    answers: string[]
): Promise<string> { // We expect this function to return a string response from the API
    const messages = questions.map((question, index) => [
        { role: "system", content: "Provide career fit advice based on user responses." },
                { role: "user", content: `User answers: ${answers.join(", ")}. Questions: ${questions.join(", ")}` }
    ]).flat(); // Flatten to merge question-answer pairs into a single array
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey,
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages,
        }),
    });
    

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content; // Extract the assistant's response
}

export default fetchCareerAdvice; 