function SkillCard(){
    return(
        <div className="ProfileSkillCard">
            <h2 className="ProfileSkillAdd">Add a Skill</h2>
            <label className = "ProfileSkillAddLabel" htmlFor="AddNewSkillToLearnNameInput">Skill Field</label>
            <input id = "AddNewSkillToLearnNameInput" className="ProfileSkillAddInputbox" placeholder="e.g., Software dev, " />

            <label className = "ProfileSkillAddLabel" htmlFor="AddNewSkillToLearnNameInput">Skill</label>
            <input id = "AddNewSkillToLearnNameInput" className="ProfileSkillAddInputbox" placeholder="e.g., Python, JS" />
            <button className="AddNewSkillButton" >
                Add
            </button>
        </div>        
    );
}
export default function Skills(){
    return(
        <div className="ProfileSkills">
                <h2 className="ProfileSkillsHeader">Skills</h2>
                <SkillCard />
        </div>
    );
}