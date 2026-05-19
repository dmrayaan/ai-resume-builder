
import Groq from "groq-sdk"

const groq = new Groq({apiKey: process.env.OPENROUTER_API_KEY,dangerouslyAllowBrowser: true});


export default groq

