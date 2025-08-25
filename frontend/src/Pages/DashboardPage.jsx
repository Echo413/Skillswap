import { useEffect, useState } from "react";
import MainNavbar from '../Components/MainNavbar'
import DashboardSidebar from '../Components/DashboardSidebar'
import SkillTeachSection from '../Components/SkillTeachSection'
import SkillLearnSection  from '../Components/SkillLearnSection';

function Usercard({ username, level, xp }) {
  return (
    <div className="User-Card-Container">
      <div className="User-Card-icon"></div>
      <div className="User-Card-userinfo-container">
        <h2 className="User-Card-username">{username}</h2>
        <div className="User-Card-userinfo">
          <h3 className="User-Card-userlevel">Level: {level}</h3>
          <h3 className="User-Card-userxp">xp: {xp} /1200</h3>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [user, setUser] = useState({ username: "", level: 1, xp: 0 });
  const API_URL = "https://skillswap-qmb5.onrender.com";
  useEffect(() => {
    fetch(`${API_URL}/api/users/dashboard`, {
      method: "POST",
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        if (data.username) {
          setUser(prev => ({ ...prev, username: data.username }));
          console.log(data.username)
        }
      })
      .catch(err => console.error(err));
  }, []);


  return (
    <div className="Dashboard">
      <div className="dashboard-tint"></div>
      <MainNavbar />
      <div className="Dashboard-body">
        <DashboardSidebar />
        <div className="Dashboard-main">
          <Usercard username={user.username || "Loading..."} level={user.level} xp={user.xp} />
          <SkillLearnSection />
          <SkillTeachSection />
        </div>
      </div>
    </div>
  );
}
