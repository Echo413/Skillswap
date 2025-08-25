
import { useNavigate } from "react-router-dom";
export default function MainNavbar(){
  const navigate = useNavigate();
    const handleNavToSignup = () => {
      setTimeout(() => {
      navigate('/dashboard');
      }, 400); 
    };
    const handleNavToMatches = () => {
      setTimeout(() => {
      navigate('/matches');
      }, 400); 
    };
    const handleNavToHome = () => {
      setTimeout(() => {
      navigate('/dashboard');
      }, 400); 
    };
    const handleNavToProfile = () =>{
      setTimeout(() => {
      navigate('/profile');
      }, 400); 
    }
  return (
    <div className="Dashboard-Navbar">
      <div className="dashboard-logo">Logo</div>
      <nav className="dashboard-menu-item-container">
        <div className="dashboard-menu-item" onClick={handleNavToHome}>Home</div>
        <div className="dashboard-menu-item" onClick={handleNavToMatches}>Skill Match</div>
        <div className="dashboard-menu-item" onClick={handleNavToProfile}>Profile</div>
      </nav>
      <div className="dashboard-searchbar">Search</div>
    </div>
  );
}