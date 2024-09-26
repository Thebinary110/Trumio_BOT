import express from "express";
import * as dotenv from "dotenv";
const cors = require('cors');;
import { TextServiceClient } from '@google-cloud/ai';

dotenv.config();

const apiKey = process.env.GOOGLE_API_KEY || "AIzaSyCbFCCb21p7BnljaosaIN8H6hYVDep2-Jo";
const client = new TextServiceClient({
  apiKey: apiKey,
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/get", async (req, res) => {
  res.status(200).send({
    message: "Hi Shhaurya, welcome",
  });
});

app.post("/chat", async (req, res) => {
  console.log("Received request:", req.body);  // Log the incoming request
  try {
    const prompt = req.body.prompt;

    const [response] = await client.generateText({
      model: "gemini-1.5-flash-8b-exp-0924",
      prompt: {
        text: prompt,
      },
      temperature: 1.0,
      maxOutputTokens: 150,
      topP: 1,
      frequencyPenalty: 0.5,
    });

    res.status(200).send({
      bot: response.candidates[0].output,
    });
  } catch (error) {
    console.log("Error in /chat:", error);
    res.status(500).send(error || "Something went wrong");
  }
});

app.listen(4000, () =>
  console.log("AI server started on http://localhost:4000")
);
