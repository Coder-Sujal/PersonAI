import mongoose, { Schema } from "mongoose";

const ChatSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    persona: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Persona",
    },
    heading: {
      type: String,
      required: true,
      default: "New Chat",
    },
    developerMessage: {
      type: String,
      required: true,
    },
    messages: [
      {
        role: {
          type: String,
          enum: ["developer", "user", "assistant"],
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", ChatSchema);

export default Chat;
