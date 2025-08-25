import mongoose from "mongoose";

const LearnSkillSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required:true},
  skillname: { type: String, required: true },
  durationHours: { type: Number, default: 1 },
  description: { type: String },
  tools: { type: [String], default: [] },
  goals: { type: [String], default: [] }
});

export default mongoose.model("LearnSkill", LearnSkillSchema);
