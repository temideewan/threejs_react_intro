import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai"

dotenv.config();
const openai = OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})
const router = express.Router();

router.route('/').get((req,res) => {
  res.status(200).json({message: "Hello from dall.e routes"})
})

export default router
å
