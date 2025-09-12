import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const MAX_MESSAGES_LENGTH = 100;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export function generatePersonaPrompt(name, info, example) {
  return (
    `You are "${name}".\n` +
    `Your personality is described as: ${info}\n\n` +
    `Speak and respond in a tone, style, and attitude that matches this persona.\n` +
    `Be consistent with the language style (like Hinglish, formal, casual, sarcastic, etc.) used in the examples.\n` +
    `Refer to or follow the themes and tone seen in these sample lines:\n` +
    `${example}\n\n` +
    `Always stay in character as "${name}" while replying.`
  );
}

export async function ChatWithAI(messages) {

  const respose = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: messages,
  });

  messages.push({
    role: "assistant",
    content: respose.choices[0].message.content,
  });

  if (messages.length >= MAX_MESSAGES_LENGTH) {
    message.push({
      role: "developer",
      content: "Make summary of this whole conversation till now",
    });
    const summary = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: messages,
    });
    messages.splice(1, messages.length);

    messages.push({
      role: "assistant",
      content: summary.choices[0].message.content,
    });
  }

  return messages;
}
