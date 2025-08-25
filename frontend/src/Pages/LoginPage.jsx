import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({setIsAuthenticated}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = "https://skillswap-qmb5.onrender.com";
  const handleSwitchToSignup = async() =>{
      navigate('/signup') 
    }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/users/login`, {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password, email:email}),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        if (data.username){
          setIsAuthenticated(true);
          navigate("/dashboard");
        }
        else{
          const messagedisplay = document.getElementsByClassName("Login-text")[0];
          messagedisplay.innerText = data.message;
          messagedisplay.style.color = "#FFA500";
          messagedisplay.style.fontWeight = "bold";
        }
      } else {
        console.log(data.error || data.message || "Login failed");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="Login-Section">
      <div className="Login-tint"></div>
      <div className="Login-Card">
        <h1 className="Login-Header">Welcome Back</h1>
        <h3 className="Login-text">Login to access your dashboard and explore new skills.</h3>
        <form onSubmit={handleSubmit}>
          <div className="Login-textbox-email">
            <label htmlFor="Login-email" className="label">Email Address</label>
            <input
              id="Login-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="Login-textbox-password">
            <label htmlFor="Login-password" className="label">Password</label>
            <input
              id="Login-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="Login-Button" type="submit"> Login</button>
        </form>
        <h2 className="Option-Text">OR</h2>
        <button className="Google-Sign-Up"><div className="Google-Sign-In-Icon"></div>Sign In With Google</button>
        <h3 className="Sign-Up-Text">Don't have an account? <a className="Sign-Up-Sub-Text" onClick={handleSwitchToSignup}>Sign Up</a></h3>
      </div>
    </div>
  );
}