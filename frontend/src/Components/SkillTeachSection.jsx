import NewSkillToTeachCard from "./NewSkillToTeachCard";
import { useState, useEffect} from 'react';
import TeachingSkillCard from './TeachingSkillCard';

export default function SkillLearnSection(){
  const [skills, setSkills] = useState([]);
  const API_URL = "https://skillswap-qmb5.onrender.com";
  const handleAddSkill = (newSkill) => {
    if (!newSkill) return;
    setSkills((prev) => [...prev, newSkill]);
  };
  useEffect(() => {
    const handleLoadSkills = async () => {
      try {
        const res = await fetch(`${API_URL}/api/skills/teach/mine`, {
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
  console.log(skills);

  return(
    <div className="Skills-Section">
      <h1 className="Skills-Header">Skills I Want To Teach</h1>
      <div className="Skills-Container">
          {skills.map((skill, index) => (
            <TeachingSkillCard
              key={index}
              skillname={skill.skillname}   
              skillLevel={null}
              prerequisites = {skill.prerequisites}
              availability = {skill.availability}
              teachingMethod = {skill.teachingMethod}/>
          ))}
        <NewSkillToTeachCard onAddSkill={handleAddSkill}/>
      </div>
    </div>
  );
}