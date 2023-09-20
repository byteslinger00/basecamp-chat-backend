import express from "express";

import {
  getAllChatRoom,
  getChatMembers
} from "../controllers/groupChat.js";

const router = express.Router();

router.get("/all", getAllChatRoom);
router.get('/members', getChatMembers);

export default router;
