export default function LearningSkillCard({ skillname, skillLevel, desc, Duration, Goals, Tools}) {
  return (
    <div className="Skill-Card">
      <div className="Skill-Card-Head-Section">
        <h2 className="Skill-Card-Header">{skillname}</h2>
        <div className="Skill-Card-Xp-Container-Learn">
          <h3 className="Skill-Card-Skill-Xp">
            {skillLevel ? skillLevel : "Learn"}
          </h3>
        </div>
      </div>
      <div className="Skill-Card-Main-Section">
        <h4 className="Skill-Card-Desc">{desc ? desc:"Master the fundamental React Hooks like useState, useEffect, and useContext for building efficient and maintainable components."}</h4>
        <h4 className="Skill-Card-Duration">
          <span className="Skill-Card-Duration-Text">Duration:&nbsp;</span>
          {Duration ? Duration : "5hrs"}
        </h4>

        <h4 className="Skill-Card-Goals">
          <span className="Skill-Card-Goals-Text">Goals:&nbsp;</span>
          {Goals ? Goals : "Understand the purpose and usage of core React Hooks"}
        </h4>

        <h4 className="Skill-Card-Tools">
          <span className="Skill-Card-Tools-Text">Tools/Resources: </span>
          {Tools}
        </h4>

      </div>
    </div>
  );
}
