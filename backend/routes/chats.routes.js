import express from "express";

import {
  createNewChat,
  deleteChatByChatId,
  getAllChats,
  getChatByChatId,
  updateMessageOfChat,
  updatePersonaOfChat,
} from "../controllers/chats.controller.js";

const router = express.Router();

router.get("/:userId", getAllChats);
router.get("/chatById/:chatId", getChatByChatId);
router.post("/:userId", createNewChat);
router.delete("/:chatId", deleteChatByChatId);
router.patch("/chat/:chatId/persona/:personaId", updatePersonaOfChat);
router.post("/chatWithAI/:chatId", updateMessageOfChat);

export default router;
