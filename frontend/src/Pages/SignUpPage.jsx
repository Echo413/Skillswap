import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const API_URL = "https://skillswap-qmb5.onrender.com";
    const handleSwitchToLogin = async() =>{
        navigate('/login') 
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch(`${API_URL}/api/users/signup`, {
                method: "POST",
                credentials: "include", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email, password: password })
                });


        const data = await response.json();
        if (response.ok) {
            if (data.email){
                console.log(`hi ${data.email}`);
                console.log(`${data.password}`);
                console.log("signed up successfully");
                navigate("/details");
            }
            else{
                console.log("not working")
                const messagedisplay = document.getElementsByClassName("Signup-text")[0];
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
        <div className="Signup-Section">
        <div className="Signup-tint"></div>
        <div className="Signup-Card">
            <h1 className="Signup-Header">Welcome to SkillSwap </h1>
            <h3 className="Signup-text">Sign in to access your dashboard and explore new skills.</h3>
            <form onSubmit={handleSubmit}>
            <div className="Signup-textbox-email">
                <label htmlFor="Signup-email" className="label">Email Address</label>
                <input
                id="Signup-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className="Signup-textbox-password">
                <label htmlFor="Signup-password" className="label">Password</label>
                <input
                id="Signup-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <button className="Signup-Button" type="submit">Sign Up</button>
            </form>
            <h2 className="Option-Text">OR</h2>
        <button className="Google-Sign-Up"><div className="Google-Sign-In-Icon"></div>Sign In With Google</button>
            <h3 className="Login-Text">Already have an account?<a className="Login-Sub-Text" onClick={handleSwitchToLogin}> Login</a></h3>
        </div>
        </div>
    );
}