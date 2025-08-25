import express from "express";
import User from "../models/user.js";
import { useReducer } from "react";
const router = express.Router();

router.post('/finish', async(req, res) =>{
    try{
        const username = req.body.username;
       // const occupation = req.body.occupation;
       const Exists = await User.findOne({username})
        if (!Exists){
            req.session.username = username
            const user = new User({
                username: req.session.username,
                email: req.session.email,
                password: req.session.password
            }); 
            await user.save()
            req.session.userId = user._id;
            req.session.username = user.username;
            console.log(req.session.userId);
            res.json(user);
        }
        else{
            res.json({message:"A user with this username already exists"})
        }
        
    }
    catch(err){
        res.json({message:err.message});
    }
});
router.post("/signup", async (req, res) => {
    try {
        const user = req.body
        const email = user.email
        if (!await User.findOne({email})){ 
            req.session.email = user.email
            req.session.password = user.password
            res.json(user)
        }
        else{
            res.json({message:"A user with this email already exists, Login?"})
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.post('/dashboard', async (req, res) => {
  try {
    if (!req.session.email) return res.status(401).json({ message: "Not authenticated" });

    const user = await User.findOne({ email: req.session.email });
    if (!user) return res.status(404).json({ message: "User not found" });
    console.log("session username at dashboard", req.session.username, "session email at dashboard", req.session.email)

    res.json({
      username: user.username,
      email: user.email,
      level: user.level || 1,
      xp: user.xp || 0
    });

  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/login", async(req, res) => {
    try{
        const email = req.body.email
        const password = req.body.password
        const user = await User.findOne({email}).select('+password');
        if (!user){
            res.json({message:"couldn't find a user with this email, sign up?"})
        }
        else{
            if (await user.comparePassword(password)){
                req.session.email = email
                req.session.username = user.username
                req.session.userId = user._id;
                console.log("session username at /login", req.session.username)
                res.json(user)
            }
            else{
                res.json({message:"invalid password"})
            }
            
        }
    }
    catch(err){
        res.json({message:err.message});
    }
});

export default router;
