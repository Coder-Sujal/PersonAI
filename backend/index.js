import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";

import chatsRoutes from './routes/chats.routes.js'
import personasRoutes from './routes/personas.routes.js'
import usersRoutes from './routes/user.routes.js'

dotenv.config();

connectDB();

const app = express();

// const newUser = new User({
//   username: "Sujal",
//   emailId: "example@123.com",
//   password: "1234",
//   chats: [],
//   personas: [],
// });
// newUser.save();

app.use(cors());
app.use(express.json());
app.use("/chats",chatsRoutes);
app.use('/personas',personasRoutes);
app.use('/users',usersRoutes);

app.listen(process.env.PORT, () => {
  console.log("App is listening at PORT =", process.env.PORT);
});
