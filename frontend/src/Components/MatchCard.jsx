function Offer({skill}){
  return(
    <div className="Offer-container">
      <h3 className="Match-Card-Skill-Offer">{skill}</h3>
    </div>
  );
}
function Seek({skill}){
  return(
    <div className="Offer-container">
      <h3 className="Match-Card-Skill-Offer">{skill}</h3>
    </div>
  );
}
export default function MatchCard({username, xp}){
  return(
    <div className="Match-Card-Container">
      <div className="Match-Card-icon"></div>
      <h2 className="Match-Card-username">{username}</h2>
      <h3 className="Match-Card-Offertext">Offers: </h3>
      <div className="Match-Card-Offers">
        <Offer skill = "web development"/>
        <Offer skill = "UI/UX design"/>
        <Offer skill = "React"/>
      </div>
      <h3 className="Match-Card-Seekingtext">Seeks: </h3>
      <div className="Match-Card-Seeking">
        <Seek skill = "web development"/>
        <Seek skill = "UI/UX design"/>
        <Seek skill = "React"/>
      </div>
      <div className="Match-Card-Xp-Container">
        <h3 className="Match-Card-Xp">XP {xp}</h3>
      </div>
      <button className="Match-Card-Session-Start-Button">Start Session</button>
    </div>
  );
}