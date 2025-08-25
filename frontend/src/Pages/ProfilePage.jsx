import { useState } from "react";
import MailNavbar from '../Components/MainNavbar';
import AboutMe from '../Components/ProfileAboutMe';
import Skills from '../Components/ProfileSkills';
// Placeholder imports for future sections
import Reviews from '../Components/ProfileReviews';
// import Achievements from '../Components/ProfileAchievements';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("about"); // default section

  const renderTab = () => {
    switch (activeTab) {
      case "about":
        return <AboutMe />;
      case "skills":
        return <Skills />;
      case "reviews":
        return <Reviews />;
      // case "achievements":
      //   return <Achievements />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="Profile">
      <div className="profile-tint"></div>
      <MailNavbar />

      {/* Profile header */}
      <div className="ProfileImageSection">
        <div className="profileImageTint"></div>
        <div className="profile">
          <div className="profileIcon"></div>
          <h2 className="profileUsername">Alex Rivera</h2>
          <h2 className="profileUserTitle">Lead software engineer</h2>
        </div>
      </div>

      {/* Profile tab navbar */}
      <div className="profileNavbar">
        <button
          className={activeTab === "about" ? "profileNavbarButtonSelected" : "profileNavbarButton"}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>

        <button
          className={activeTab === "skills" ? "profileNavbarButtonSelected" : "profileNavbarButton"}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>

        <button
          className={activeTab === "reviews" ? "profileNavbarButtonSelected" : "profileNavbarButton"}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>

        <button
          className={activeTab === "achievements" ? "profileNavbarButtonSelected" : "profileNavbarButton"}
          onClick={() => setActiveTab("achievements")}
        >
          Achievements
        </button>
      </div>

      {/* Render the active tab */}
      {renderTab()}
    </div>
  );
}
