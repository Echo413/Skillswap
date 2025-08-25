import mongoose from "mongoose";

const TeachSkillSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required:true},
  skillname: { type: String, required: true },
  prerequisites: { type: String},
  description: { type: String },
  availability: { type: [String], default: [] },
  teachingMethod: { type: [String], default: [] }
});

export default mongoose.model("TeachSkill", TeachSkillSchema);