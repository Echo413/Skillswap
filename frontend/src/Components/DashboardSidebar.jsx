import DashboardUserCard from './DashboardUserCard'

export default function DashboardSidebar(){
  return(
    <div className="Dashboard-Sidebar">
      <h2 className="Sidebar-Header">Leaderboard</h2>
      <DashboardUserCard name="Alice" level="5" xp="1200" />
      <DashboardUserCard name="Bob" level="4" xp="950" />
      <DashboardUserCard name="Bob" level="4" xp="950" />
      <DashboardUserCard name="Bob" level="4" xp="950" />
      <DashboardUserCard name="Bob" level="4" xp="950" />
      <DashboardUserCard name="Bob" level="4" xp="950" />
    </div>
  );
}