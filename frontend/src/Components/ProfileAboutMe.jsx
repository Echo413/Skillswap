function Interest({skill}){
    return(
        <div className="Interest">
            <h4 className="InterestText">{skill}</h4>
        </div>
    )
}

export default function AboutMe(){
    return(
        <div className="AboutMe">
                <h1 className="AboutMeHeader">About Me</h1>
                <div className="AboutMeDescSection">
                    <div className="profileCard">
                        <div className="profileCard-icon">
                            <div className="ProfileCardIcon">🧩</div>
                            <div className="Profilecard-title">Personal info</div>
                        </div>
                        <div className="Profilecard-text">Location: San Francisco, CA</div>
                        <div className="Profilecard-text">Member Since: January 2022</div>
                        <div className="Profilecard-text">Sessions Completed: 42</div>
                        <div className="Profilecard-text">Skills Shared: 15</div>
                    </div>
                     <div className="profileCard">
                        <div className="profileCard-icon">
                            <div className="ProfileCardIcon">💎</div>
                            <div className="Profilecard-title">Bio</div>
                        </div>
                        <div className="Profilecard-text">Passionate software engineer with over 8 years of experience in full-stack web development. I specialize in building scalable applications and love mentoring others in modern programming practices. I'm always eager to learn new technologies and connect with fellow developers.</div>
                    </div>
                </div>
                <div className="interestSection">
                    <div className="profileCard-icon">
                        <div className="ProfileCardIcon">🎇</div>
                        <div className="Profilecard-title">Interests</div> 
                    </div>
                    <div className="interestSectionList">
                        <Interest skill = {"Game dev"}/>
                        <Interest skill = {"Web dev"}/>
                        <Interest skill = {"Crime dev"}/>
                        <Interest skill = {"Terrorism dev"}/>
                    </div>
                </div>
            </div>
    );
}