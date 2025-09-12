import Chat from "../model/chat.model.js";
import User from "../model/user.model.js";
import Persona from "../model/persona.model.js";

import { COT_MESSAGE } from "../DeveloperMessages/cot.js";
import { ChatWithAI, generatePersonaPrompt } from "../aichat.js";

export async function getAllChats(req, res) {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      console.log("❌User not found");
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    const chats = await user.populate({ path: "chats" });

    const responseChats = await user.chats.map((chat) => ({
      _id: chat._id,
      heading: chat.heading,
    }));

    res
      .status(200)
      .json({ success: true, message: "Success", chats: responseChats });
  } catch (error) {
    console.log("❌Error in get all chats method", error);

    res.status(404).json({ success: false, message: "Chats not found" });
  }
}

export async function getChatByChatId(req, res) {
  try {
    const { chatId } = req.params;
    const chat = await Chat.findById(chatId);
    if (!chat) {
      res.status(404).json({ success: false, message: "Chat not found" });
      return;
    }
    res.status(200).json({ success: true, message: "Chat found", chat: chat });
  } catch (error) {
    console.log("❌Error in get by chatID method", error);
    res.status(404).json({ success: false, message: "Chats not found" });
  }
}

export async function createNewChat(req, res) {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      console.log("❌User not found");
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    const defaultPersona = await Persona.findOne({
      name: "Gen Z Indian",
      isDefault: true,
    });

    if (!defaultPersona) {
      res.send(404).json({
        success: false,
        message:
          "Default persona does not exist contact developer fort this issue",
      });
      return;
    }

    const newChat = new Chat({
      userId: user._id,
      personaId: defaultPersona._id,
      developerMessage: COT_MESSAGE, //⁉️ make add personas
      messages: [],
    });

    const personaPrompt = generatePersonaPrompt(
      defaultPersona.name,
      defaultPersona.info,
      defaultPersona.example
    );

    const prompt = personaPrompt + "\n" + newChat.developerMessage;

    newChat.messages.push({ role: "developer", content: prompt });

    await newChat.save();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { chats: newChat._id } },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "New chat created successfully",
      chat: updatedUser,
    });
  } catch (error) {
    console.log("❌There is an error in creating new chat", error);
    res
      .status(500)
      .json({ success: false, message: "Error in creating new chat" });
  }
}

export async function deleteChatByChatId(req, res) {
  try {
    const { chatId } = req.params;

    const chat = await Chat.findById(chatId);

    if (!chat) {
      res.status(404).json({ success: false, message: "Chat does not exist" });
      return;
    }

    const userId = chat.userId;
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ success: false, message: "User does not exist" });
      return;
    }

    await Chat.findByIdAndDelete(chatId);

    await User.findByIdAndUpdate(userId, { $pull: { chats: chatId } });

    res
      .status(200)
      .json({ success: true, message: "Chat deleted Successfully" });
  } catch (error) {
    console.log("❌Something went wrong while deleting chat", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

export async function updatePersonaOfChat(req, res) {
  try {
    const { chatId, personaId } = req.params;

    const chat = await Chat.findById(chatId);
    const persona = await Persona.findById(personaId);

    if (!chat) {
      res.status(404).json({ success: false, message: "Chat not found" });
      return;
    }

    if (!persona) {
      res.status(404).json({ success: false, message: "Persona not found" });
      return;
    }

    const personaPrompt = generatePersonaPrompt(
      persona.name,
      persona.info,
      persona.example
    );

    chat.personaId = persona._id;

    if (chat.messages[0].role === "developer") {
      chat.messages.shift();
    }

    chat.messages.unshift({
      role: "developer",
      content: personaPrompt + "\n" + chat.developerMessage,
    });

    const updatedChat = await chat.save();

    res.status(200).json({
      success: true,
      message: "Successfully updated persona of chat",
      updatedChat: updatedChat,
    });
  } catch (error) {
    console.log("❌There is an error in updating persona of chat", error);
    res
      .status(500)
      .json({ success: false, message: "Error in updating persona of chat" });
  }
}

export async function updateMessageOfChat(req, res) {
  try {
    const { chatId } = req.params;
    const { role, message } = req.body;

    // Validate input
    if (!role || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Role and message are required." });
    }

    // Find the chat
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res
        .status(404)
        .json({ success: false, message: "Chat does not exist." });
    }

    // Add the new user message
    chat.messages.push({ role, content: message });

    // Filter and sanitize messages before sending to OpenAI
    const filteredMessages = chat.messages
      .filter((msg) => msg.role && msg.content)
      .map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

    // Get new assistant messages from AI
    const aiMessages = await ChatWithAI(filteredMessages); // returns an array

    // Append AI messages to chat
    chat.messages.push(...aiMessages);

    // Save the updated chat
    await chat.save();

    // Respond with just the last assistant message (optional)
    const lastAssistantMessage = aiMessages.at(-1); // or aiMessages[aiMessages.length - 1]

    res.status(200).json({
      success: true,
      message: "Successfully chatted with AI",
      response: lastAssistantMessage,
    });
  } catch (error) {
    console.error("❌ Error in updateMessageOfChat:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}
