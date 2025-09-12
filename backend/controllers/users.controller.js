import Persona from "../model/persona.model.js";
import User from "../model/user.model.js";

export async function createUser(req, res) {
  try {
    const { username, emailId, password } = req.body;
    const newUser = await User({
      username: username,
      emailId: emailId,
      password: password, //⁉️ handle image also
      chats: [],
      personas: [],
    });
    const defaultPersonas = await Persona.find({ isDefault: true, userId: null });

    for(const personas of defaultPersonas){
      newUser.personas.push(personas._id);  
    }

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "New User created successfully",
      chat: newUser,
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern?.emailId) {
      return res
        .status(409)
        .json({ success: false, message: "Email already exists" });
    }
    console.log("❌There is an error in creating new User", error);
    res
      .status(500)
      .json({ success: false, message: "Error in creating new User" });
  }
}

export async function getUserById(req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.status(200).json({ success: true, message: "User found", user: user });
  } catch (error) {
    console.log("❌Error in get user by Id method", error);
    res.status(404).json({ success: false, message: "User not found" });
  }
}

export async function deleteUserById(req, res) {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ success: false, message: "User does not exist" });
      return;
    }

    await User.findOneAndDelete({ _id: userId });
    
    res
      .status(200)
      .json({ success: true, message: "User deleted Successfully" });
  } catch (error) {
    console.log("❌Something went wrong while deleting user", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}
