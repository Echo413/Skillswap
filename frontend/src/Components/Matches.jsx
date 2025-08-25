import MatchCard from './MatchCard'
export default function Matches(){
  return(
    <div className="Matches-Main-Container">
      <h1 className="Matches-Main-Header">Your Matches</h1>
      <div className="Matches-Container">
        <MatchCard username="Alice Johnson" xp="1500"/>
        <MatchCard username="Bob Johnson" xp="1200"/>
      </div>
    </div>
  );
}