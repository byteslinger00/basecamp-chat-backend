import ChatMessage from "../models/ChatMessage.js";
import ChatRoom from "../models/ChatRoom.js";
import auth from "../config/firebase-config.js";

export const createMessage = async (req, res) => {
  const newMessage = new ChatMessage(req.body);

  try {
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await ChatMessage.find({
      chatRoomId: req.params.chatRoomId,
    });
    const group = await ChatRoom.find({_id: req.params.chatRoomId});
    var userinfo = [];
    await Promise.all(group[0].members.map(async (member)=>{
      console.log('group:   '+member);
      const userRecord = await auth.getUser(member);
      const { uid, email, displayName, photoURL } = userRecord;
      userinfo.push({id:uid, email, display:displayName, photoURL});
    }));
    res.status(200).json({messages,userinfo});
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
