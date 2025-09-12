import express from 'express'
import { createUser, deleteUserById, getUserById } from '../controllers/users.controller.js';

const router = express.Router();

router.get('/:userId',getUserById);
router.post('/',createUser);
router.delete('/:userId',deleteUserById)

export default router