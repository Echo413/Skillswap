import MainNavbar  from "../Components/MainNavbar";
import Matches from "../Components/Matches";

export default function MatchPage(){
  return(
    <div className="Match-Main">
      <div className="Match-Main-tint"></div>
      <MainNavbar />
      <Matches />
    </div>
  );
}