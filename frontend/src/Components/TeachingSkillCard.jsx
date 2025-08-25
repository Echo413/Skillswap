export default function TeachingSkillCard({ skillLevel, skillname, prerequisites, desc, availability, teachingMethod, Tools}) {
  return (
    <div className="Skill-Card">
      <div className="Skill-Card-Head-Section">
        <h2 className="Skill-Card-Header">{skillname?skillname:"Introduction To React"}</h2>
        <div className="Skill-Card-Xp-Container-Teach">
          <h3 className="Skill-Card-Skill-Xp">
            {skillLevel ? skillLevel : "Learn"}
          </h3>
        </div>
      </div>
      <div className="Skill-Card-Main-Section">
        <h4 className="Skill-Card-Desc">{desc ? desc:"Master the fundamental React Hooks like useState, useEffect, and useContext for building efficient and maintainable components."}</h4>
        <h4 className="Skill-Card-Duration">
          <span className="Skill-Card-Duration-Text">availability :&nbsp;</span>
          {availability ? availability : "5hrs"}
        </h4>

        <h4 className="Skill-Card-Goals">
          <span className="Skill-Card-Goals-Text">Expectations from the student:&nbsp;</span>
          {prerequisites ? prerequisites : "Basic HTML and CSS knowledge"}
        </h4>

        <h4 className="Skill-Card-Tools">
          <span className="Skill-Card-Tools-Text">Teaching Vibe:&nbsp; </span>
          {teachingMethod? teachingMethod:"Gamified/fun"}
        </h4>
      </div>
    </div>
  );
}
