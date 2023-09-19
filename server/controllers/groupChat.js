import ChatRoom from "../models/ChatRoom.js";

export const getAllChatRoom = async (req, res) => {
  try {
    const chatRoom = await ChatRoom.find({});
    res.status(200).json(chatRoom);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
}