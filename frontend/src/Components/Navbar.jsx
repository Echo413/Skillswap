import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
    const handleNavToSignup = () => {
      setTimeout(() => {
      navigate('/signup');
      }, 400); 
    };
    const handleNavToLogin = () => {
      setTimeout(() => {
      navigate('/login');
      }, 400); 
    };
    const handleNavToHome = () => {
      setTimeout(() => {
      navigate('/signup');
      }, 400); 
    };
  return (
    <div className="Dashboard-Navbar">
      <div className="dashboard-logo">Logo</div>
      <nav className="dashboard-menu-item-container">
        <div className="dashboard-menu-item">Home</div>
        <div className="dashboard-menu-item">How it works</div>
        <div className="dashboard-menu-item" onClick={handleNavToSignup}>Sign up</div>
        <div className="dashboard-menu-item" onClick={handleNavToLogin}>Login</div>
      </nav>
      <div className="dashboard-searchbar"></div>
    </div>
  );
}