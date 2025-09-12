import express from "express";
import {
  createPersona,
  deletePersonaByPersonaId,
  getAllPersonas,
  getPersonaByPersonaId,
} from "../controllers/personas.controller.js";

const router = express.Router();

router.post("/:userId", createPersona);
router.get("/:userId", getAllPersonas);
router.get("/getById/:personaId",getPersonaByPersonaId);
router.delete("/:personaId",deletePersonaByPersonaId);

export default router;
