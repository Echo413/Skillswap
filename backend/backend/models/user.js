import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: { type: String , unique: true, required:true},
  skills: [{ type: String }],
  xp: { type: Number, default: 0 },
  password: { type: String, required: true }, 
  email : {type:String, required: true},
  occupation :{type:String}
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const saltRounds = 10;
    const hashed = await bcrypt.hash(this.password, saltRounds);
    this.password = hashed;
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};


export default mongoose.model("User", userSchema);
