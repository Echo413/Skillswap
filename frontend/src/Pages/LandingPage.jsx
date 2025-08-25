import React from "react";
import DescriptionSection from "../Components/DescriptionSection";
import Navbar from '../Components/Navbar';
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const handleSignup = () => {
    setTimeout(() => {
    navigate('/signup');
    }, 400); 
    console.log("clicked");
  };

  return (
    <div className="Hero">
      <Navbar />
      <div className="Section">
        <div className="tint"></div>
        <div className="Hero-Container">
          <header className="header App-header">
            Unlock Your Potential. Exchange Skills. Build Your Future.
          </header>
          <h2 className="text">
            Connect with a global community to learn, teach, and grow. <br/>
            SkillSwap makes skill exchange seamless and rewarding.
          </h2>
          <div className="Buttons-Container">
            <button onClick={handleSignup} className="Sign-up-Button">Sign Up Now</button>
            <button className="Learn-More-Button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <DescriptionSection />
    </div>
  );
}
