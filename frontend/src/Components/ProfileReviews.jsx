function Reviews({stars, skills, Desc}){
    return(
        <div className="profileReviewCard">
            <div className="profileCard-icon">
                <div className="ProfileReviewCardIcon"></div>
                <div className="Profilecard-title">Bob: {stars ? "⭐".repeat(stars): "⭐⭐⭐⭐⭐"}</div>
            </div>
            <div className="Profilecard-text">Completed Skill: {skills? skills:"Python"}</div>
            <div className="Profilecard-text">Description: {Desc? Desc:"Amazing tutor! "}</div>
        </div> 
    );
}
export default function ProfileReviews(){
    return(
    <div className="ProfileReviews">
        <Reviews />
    </div>       
    );
}