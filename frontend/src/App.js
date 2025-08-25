import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/Routes";

import "./Styles/Hero.css";
import "./Styles/section.css";
import "./Styles/login.css";
import "./Styles/dashboard.css";
import "./Styles/match.css";
import "./Styles/signup.css";
import "./Styles/profile.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <AppRoutes
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </Router>
  );
}

export default App;
