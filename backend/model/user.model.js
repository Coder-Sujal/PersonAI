import mongoose from "mongoose";
import Chat from "./chat.model.js";
import Persona from "./persona.model.js"

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    chats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
      },
    ],
    personas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Persona",
      },
    ],
  },
  { timestamps: true }
);

UserSchema.pre('findOneAndDelete', async function (next) {
  const userId = this.getQuery()['_id'];

  try {
    // Delete all chats of this user
    await Chat.deleteMany({ userId });

    // Delete all personas of this user, except default ones
    await Persona.deleteMany({ userId, isDefault: false });

    next();
  } catch (err) {
    next(err);
  }
});


const User = mongoose.model("User", UserSchema);

export default User;