import { useState } from "react";

export default function NewSkillToTeachCard({onAddSkill}){
  const [input, setInput] = useState("");
  const [Availability, setAvailability] = useState("");
  const [Duration, setDuration] = useState("");
  const [Prerequisites, setPrerequisites] = useState("");
  const [TeachingMethod, setTeachingMethod] = useState("");
  const API_URL = "https://skillswap-qmb5.onrender.com";
  const  handleClick = async() => {
    if (!input.trim()) return;

    const newSkill = {
      skillname: input.trim(),
      availability: Availability,
      duration: Duration,
      prerequisites: Prerequisites,
      teachingMethod: TeachingMethod,
    };
    const res = await fetch(`${API_URL}/api/skills/teach/addSkill`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ skillname: input.trim(), 
        availability: Availability,
        durationHours: Duration,
        prerequisites: Prerequisites, 
        teachingMethod: TeachingMethod,
      }),
    });

    const data = await res.json();
    onAddSkill(newSkill);
    setInput("");
  };    
    return(
        <div className="NewSkillToLearnContainer">
            <h2 className="AddNewSkillToLearnText">Teach a New Skill</h2>
            <div className="AddNewSkillToLearnInputContainer">

                <label className = "AddNewSkillToLearnNameLabel" htmlFor="AddNewSkillToLearnNameInput">Skill Name</label>
                <input id = "AddNewSkillToLearnNameInput" className="AddNewSkillToLearnInputbox" placeholder="e.g., Web Development" value={input} onChange={(e) => setInput(e.target.value)}/>

                <label className = "AddNewSkillToLearnNameLabel" htmlFor="AddNewSkillToLearnNameInput">Duration (hours/week)</label>
                <input id = "AddNewSkillToLearnNameInput" className="AddNewSkillToLearnInputbox" placeholder="e.g., 5" value={Duration} onChange={(e) => setDuration(e.target.value)}/>

                <label className = "AddNewSkillToLearnNameLabel" htmlFor="AddNewSkillToLearnNameInput">Prerequisites (optional)</label>
                <input id = "AddNewSkillToLearnNameInput" className="AddNewSkillToLearnInputbox" placeholder="e.g., Basic HTML and CSS" value={Prerequisites} onChange={(e) => setPrerequisites(e.target.value)}/>

                
                <label className = "AddNewSkillToLearnNameLabel" htmlFor="AddNewSkillToLearnNameInput">Teaching Vibe (optional)</label>
                <select className="AddNewSkillToLearnSkillLevel" value={TeachingMethod} onChange={(e) => setTeachingMethod(e.target.value)}>
                    <option value={"Hands-on & interactive"}>Hands-on & interactive</option>
                    <option value={"Project-based"}>Project-based</option>
                    <option value={"Chill & casual"}>Chill & casual</option>
                    <option value={"Intense & fast-paced(for rapid learners)"}>Intense & fast-paced(for rapid learners)</option>
                    <option value={"Gamified / fun"}>Gamified / fun</option>
                    <option value={"Step-by-step guided"}>Step-by-step guided</option>
                    <option value={"Mentorship-style"}>Mentorship-style</option>
                    <option value={"Challenge-oriented"}>Challenge-oriented</option>
                    <option value={"Deep-dive / theoretical"}>Deep-dive / theoretical</option>
                </select>
                <label className = "AddNewSkillToLearnNameLabel" htmlFor="AddNewSkillToLearnNameInput">How available are you</label>
                
                <div className="SkillLevelAndButtonContainer">
                    <select className="AddNewSkillToLearnSkillLevel" value={Availability} onChange={(e) => setAvailability(e.target.value)}>
                        <option>Occasional (1–2 hrs/week)</option>
                        <option>Regular (3–5 hrs/week)</option>
                        <option>Dedicated (6+ hrs/week)</option>
                    </select>
                    <button className="AddNewSkillButton" onClick={handleClick}>Add</button>
                </div>
            </div>
        </div>
    );
}