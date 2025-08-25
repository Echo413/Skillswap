import { useState, useEffect} from "react";
import LearningSkillCard from "./LearningSkillCard";
import NewSkillToLearnCard from "./NewSkillToLearnCard";

export default function SkillLearnSection() {
  const [skills, setSkills] = useState([]);
  const API_URL = "https://skillswap-qmb5.onrender.com";
  const handleAddSkill = (newSkill) => {
    if (!newSkill) return;
    setSkills((prev) => [...prev, newSkill]);
  };

  useEffect(() => {
    const handleLoadSkills = async () => {
      try {
        const res = await fetch(`${API_URL}/api/skills/learn/mine`, {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Fetched skills:", data);

        setSkills(data);
      } catch (err) {
        console.error("Failed to load skills", err);
      }
    };

    handleLoadSkills();
}, []);
  return (
    <div className="Skills-Section">
      <h1 className="Skills-Header">Skills I Want To Learn</h1>
      <div className="Skills-Container">
        {skills.map((skill, index) => (
            <LearningSkillCard
              key={index}
              skillname={skill.skillname}   
              skillLevel={skill.level}
              Duration = {skill.durationHours}
              Goals = {skill.goals}
              Tools = {skill.tools}
            />
          ))}
        <NewSkillToLearnCard onAddSkill={handleAddSkill} />
      </div>
    </div>
  );
}
