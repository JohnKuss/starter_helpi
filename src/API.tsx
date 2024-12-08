// Import necessary modules (if applicable, depending on your setup)
// import OpenAI from "openai";

// This function was initially coded by Layan, then put into ChatGPT with the errors it was giving to troubleshoot.
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
1. Start each career paragraph with only the career name (e.g., "Project Management.").
2. Follow it with a description in a new sentence.
3. Add another sentence explaining why the career may suit the user's preferences, skills, or background.
4. List skills useful for the role in a fourth sentence.
5. Provide a link to the Wikipedia page in parentheses at the end of the paragraph.

Ensure the response uses this exact structure. Separate paragraphs with two newlines.`

        },
        { 
            role: "user", 
            content: `User answers: ${answers.join(", ")}. Questions: ${questions.join(", ")}` 
        }
    ];

    try {
        // API request to OpenAI
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`, // Use template literal for consistency
            },
            body: JSON.stringify({
                model: 'gpt-4', // Make sure to use a model you have access to
                messages, // Send the prepared messages
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
    } catch (error) {
        console.error("Error fetching career advice:", error);
        throw error; // Re-throw error for handling by the caller
    }
}

export default fetchCareerAdvice;
