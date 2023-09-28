import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
 
const MONGO_URI = 'mongodb://127.0.0.1:27017/chat';
// const MONGO_URI = 'mongodb+srv://akhil-test:clJWYZ15jty0IcXY@cluster0.8vmew3g.mongodb.net/';
// const MONGO_URI = 'mongodb+srv://grupapoydev:black123qwe@cluster0.c9v307y.mongodb.net/';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongo has connected succesfully");
});
mongoose.connection.on("reconnected", () => {
  console.log("Mongo has reconnected");
});
mongoose.connection.on("error", (error) => {
  console.log("Mongo connection has an error", error);
  mongoose.disconnect();
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongo connection is disconnected");
});
