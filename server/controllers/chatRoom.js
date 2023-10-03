import ChatRoom from "../models/ChatRoom.js";

export const createChatRoom = async (req, res) => {
  console.log('1')
  if (req.body.receiverId !== "Group") {
    const newChatRoom = new ChatRoom({
      members: [req.body.senderId, req.body.receiverId],
      name: req.body.groupName ? req.body.groupName : "",
    });

    try {
      await newChatRoom.save();
      res.status(201).json(newChatRoom);
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  } else {
    const newChatRoom = new ChatRoom({
      members: [req.body.senderId],
      name: req.body.groupName ? req.body.groupName : "",
    });

    try {
      await newChatRoom.save();
      res.status(201).json(newChatRoom);
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  }
};

export const getChatRoomOfUser = async (req, res) => {
  console.log('2')
  try {
    const chatRoom = await ChatRoom.find({});
    res.status(200).json(chatRoom);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getChatRoomOfUsers = async (req, res) => {
  console.log('3')
  try {
    const chatRoom = await ChatRoom.find({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(chatRoom);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
