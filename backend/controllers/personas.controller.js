import Persona from "../model/persona.model.js";
import User from "../model/user.model.js";

export async function createPersona(req, res) {
  try {
    const { userId } = req.params;
    const { name, info, example } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      console.log("❌User not found");
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    const newPersona = new Persona({
      name,
      info,
      example,
      userId: user._id,
    });

    await newPersona.save();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { personas: newPersona._id } },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "New Persona created successfully",
      persona: updatedUser,
    });
  } catch (error) {
    if ((error.code = 11000)) {
      console.log("❌There is an error in creating new Persona", error);
      res.status(500).json({
        success: false,
        message: "A persona with this name already exists.",
      });
    } else {
      console.log("❌There is an error in creating new Persona", error);
      res
        .status(500)
        .json({ success: false, message: "Error in creating new persona" });
    }
  }
}

export async function getAllPersonas(req, res) {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      console.log("❌User not found");
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    const personas = await user.populate({ path: "personas" });

    const responsePersonas = await user.personas.map((persona) => ({
      _id: persona._id,
      name: persona.name,
    }));

    res
      .status(200)
      .json({ success: true, message: "Success", personas: responsePersonas });
  } catch (error) {
    console.log("❌Error in getting all personas method", error);

    res.status(404).json({ success: false, message: "Personas not found" });
  }
}

export async function getPersonaByPersonaId(req, res) {
  try {
    const { personaId } = req.params;
    const persona = await Persona.findById(personaId);
    if (!persona) {
      res.status(404).json({ success: false, message: "Persona not found" });
      return;
    }
    res
      .status(200)
      .json({ success: true, message: "Persona found", persona: persona });
  } catch (error) {
    console.log("❌Error in get by personaId method", error);
    res.status(404).json({ success: false, message: "Persona not found" });
  }
}

export async function deletePersonaByPersonaId(req, res) {
  try {
    const { personaId } = req.params;

    const persona = await Persona.findById(personaId);

    if (!persona) {
      res
        .status(404)
        .json({ success: false, message: "Persona does not exist" });
      return;
    }

    const userId = persona.userId;
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ success: false, message: "User does not exist" });
      return;
    }

    await Persona.findByIdAndDelete(personaId);

    await User.findByIdAndUpdate(userId, { $pull: { personas: personaId } });

    res
      .status(200)
      .json({ success: true, message: "Persona deleted Successfully" });
  } catch (error) {
    console.log("❌Something went wrong while deleting persona", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}
