//import OpenAI from "openai";

//This function was initially coded by Layan, then put into ChatGPT with the errors it was giving to troubleshoot.
export async function fetchCareerAdvice(
    apiKey: string,
    questions: string[],
    answers: string[]
): Promise<string> { 
    // Prepare the messages array for the API request
    const messages = [
        { 
            role: "system", 
            content: `Write three paragraphs listing specific careers that may fit the user based on their responses. 
            Label the first paragraph with Career 1:, second with Career 2:, and third with Career 3:. 
            In each paragraph, include:
            1. A sentence describing the career.
            2. A sentence explaining why it may be a good fit for the user.
            3. A sentence describing the skills useful for that career.
            End each paragraph with a link to the Wikipedia page for that career.
            Ensure that each paragraph discusses a different career. 
            Please separate each paragraph with a double newline (two line breaks) to ensure clear separation between them.` 
        },
        { 
            role: "user", 
            content: `User answers: ${answers.join(", ")}. Questions: ${questions.join(", ")}` 
        }
    ];

    // API request to OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`, // Use template literal for consistency
        },
        body: JSON.stringify({
            model: 'gpt-4',  // Make sure to use a model you have access to
            messages,  // Send the prepared messages
        }),
    });

    // Handle response status
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response JSON and extract the assistant's message
    const data = await response.json();
    if (data.choices && data.choices[0] && data.choices[0].message) {
        let content = data.choices[0].message.content;

        // Post-process to ensure double newlines between paragraphs
        content = content.replace(/(\n){2,}/g, '\n\n'); // Replace multiple newlines with a double newline
        
        return content.trim(); // Return the formatted response
    } else {
        throw new Error("Unexpected response structure.");
    }
}

export default fetchCareerAdvice;