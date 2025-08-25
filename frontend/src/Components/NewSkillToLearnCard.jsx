import { useState } from "react";

export default function NewSkillToLearnCard({ onAddSkill }) {
  const [input, setInput] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [Duration, setDuration] = useState("");
  const [Goals, setGoals] = useState("");
  const [Tools, setTools] = useState("");
  const API_URL = "https://skillswap-qmb5.onrender.com";
  const  handleClick = async() => {

    if (!input.trim()) return;

    const newSkill = {
      skillname: input.trim(),
      level: skillLevel,
      duration: Duration,
      goals: Goals,
      tools: Tools,
    };
    const res = await fetch(`${API_URL}/api/skills/learn/addSkill`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ skillname: input.trim(), 
        level: skillLevel, 
        durationHours: Duration,
        goals: Goals, 
        tools: Tools,
      }),
    });

    const data = await res.json();
    console.log(data); 

    onAddSkill(newSkill);
    setInput("");
    setSkillLevel("Beginner");
  };
  return (
    <div className="NewSkillToLearnContainer">
      <h2 className="AddNewSkillToLearnText">Learn a New Skill</h2>
      <div className="AddNewSkillToLearnInputContainer">
        <label className = "AddNewSkillToLearnNameLabel" htmlFor="AddNewSkillToLearnNameInput">Skill Name</label>
        <input id = "AddNewSkillToLearnNameInput" className="AddNewSkillToLearnInputbox" placeholder="e.g., Web Development" value={input} onChange={(e) => setInput(e.target.value)}/>

        <label className = "AddNewSkillToLearnNameLabel" htmlFor="AddNewSkillToLearnNameInput">Duration (hours/week)</label>
        <input id = "AddNewSkillToLearnNameInput" className="AddNewSkillToLearnInputbox" placeholder="e.g., 5" value={Duration} onChange={(e) => setDuration(e.target.value)}/>

        <label className = "AddNewSkillToLearnNameLabel" htmlFor="AddNewSkillToLearnNameInput">Goals (optional)</label>
        <input id = "AddNewSkillToLearnNameInput" className="AddNewSkillToLearnInputbox" placeholder="e.g., Build a portfolio project" value={Goals} onChange={(e) => setGoals(e.target.value)}/>

        
        <label className = "AddNewSkillToLearnNameLabel" htmlFor="AddNewSkillToLearnNameInput">Tools/Resources (optional)</label>
        <input id = "AddNewSkillToLearnNameInput" className="AddNewSkillToLearnInputbox" placeholder="e.g., Build a portfolio project" value={Tools} onChange={(e) => setTools(e.target.value)}/>

        <div className="SkillLevelAndButtonContainer">
        <label className = "AddNewSkillToLearnNameLabel" htmlFor="AddNewSkillToLearnNameInput">Your Current Skill Level</label>
          <select
            className="AddNewSkillToLearnSkillLevel" value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <button className="AddNewSkillButton" onClick={handleClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
