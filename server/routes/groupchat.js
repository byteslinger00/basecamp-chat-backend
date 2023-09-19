import express from "express";

import {
  getAllChatRoom,
} from "../controllers/groupChat.js";

const router = express.Router();

router.get("/all", getAllChatRoom);

export default router;
