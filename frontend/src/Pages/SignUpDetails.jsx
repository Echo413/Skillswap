import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage({setIsAuthenticated}){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [occupation, setOccupation] = useState("");
    const API_URL = "https://skillswap-qmb5.onrender.com";
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch(`${API_URL}/api/users/finish`, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: username })
            });
        const data = await response.json();

        if (response.ok) {
            if (data.username){
                console.log(`hi ${data.username} with ${data.email}, ${data.password}`);
                console.log("finshed up successfully");
                setIsAuthenticated(true);
                navigate("/dashboard");
            }
            else{
                console.log("not working");
                console.log(data.message);
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
            <h1 className="Signup-Header">You're Almost Done!</h1>
            <h3 className="Signup-text">we just need to know a bit more about you to get started.</h3>
            <form onSubmit={handleSubmit}>
            <div className="Signup-textbox-email">
                <label htmlFor="Signup-email" className="label">Username </label>
                <input
                id="Signup-username"
                type="text"
                placeholder="this what people see on your profile"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </div>
            <div className="Signup-textbox-password">
                <label htmlFor="Signup-password" className="label">Your Main occupance</label>
                <select id="Signup-password" className = "Signup-Skills-Dropdown" type="text"  value={occupation} onChange={(e) => setOccupation(e.target.value)} required >
                    <option value="">what's your education level</option>
                    <option value="Graduate" >Graduate</option>
                    <option>High school</option>
                    <option>Middle school</option>
                    <option>College</option>
                    <option>other</option>
                </select>
            </div>
            <button className="Signup-Button" type="submit">Finish up</button>
            </form>
            <h2 className="Option-Text">OR</h2>
            <button className="Google-Sign-Up"><div className="Google-Sign-In-Icon"></div>Sign In With Google</button>
        </div>
        </div>
    );
}