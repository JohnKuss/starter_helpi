const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.post('/api/career-advice', async (req, res) => {
    const { apiKey, questions, answers } = req.body;
    if (!apiKey) {
        return res.status(400).json({ error: "API Key is missing" });
    }

    try {
        const openai = new OpenAI({ apiKey: apiKey });
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "Provide career fit advice based on user responses." },
                { role: "user", content: `User answers: ${answers.join(", ")}. Questions: ${questions.join(", ")}` }
            ]
        });
        res.json({ advice: completion.choices[0].message.content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch career advice" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
