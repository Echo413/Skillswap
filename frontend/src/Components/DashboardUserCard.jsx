export default function DashboardUserCard({ name, level, xp }) {
  return (
    <div className="Sidebar-usercard">
        <div className="Sidebar-usercard-usersection">
          <div className="Sidebar-usercard-icon">👤</div>
          <div className="Sidebar-usercard-name">{name}</div>
        </div>
        <div className="Sidebar-usercard-info">
          <div className="Sidebar-usercard-points">Level: {level}</div>
          <div className="Sidebar-usercard-points">xp: {xp}</div>
        </div>
      </div>
  );
}