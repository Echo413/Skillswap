import express from "express";
import Learnskill from "../models/Learnskill.js";
import TeachSkill from "../models/Teachskill.js";
import { useReducer } from "react";
const router = express.Router();


router.post('/learn/addSkill', async(req, res) =>{
    const skill = new Learnskill(req.body)
    skill.user = req.session.userId
    await skill.save()
    res.json({skill: skill});
});

router.post('/teach/addSkill', async(req, res) =>{
    const skill = new TeachSkill(req.body)
    skill.user = req.session.userId
    skill.save()
    res.json({skill: skill});
});

router.get("/learn/mine", async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not logged in" });
    }

    const skills = await Learnskill.find({ user: req.session.userId });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/teach/mine", async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not logged in" });
    }

    const skills = await TeachSkill.find({ user: req.session.userId });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
export default router;