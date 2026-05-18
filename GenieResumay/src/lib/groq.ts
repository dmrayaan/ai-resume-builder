
import Groq from "groq-sdk";
const apiKey = process.env.GROQ_API_KEY;
const groq = new Groq({apiKey,dangerouslyAllowBrowser: true});


export default groq

