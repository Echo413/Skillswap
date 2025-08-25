import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userroutes.js";
import skillRoutes from "./routes/skillroutes.js"

import session from 'express-session'
import MongoStore from "connect-mongo";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: "https://skillswap-frontend-mgic.onrender.com", 
  credentials: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI
  }),
  cookie: {
    httpOnly: true,
    secure: true, 
    sameSite: "lax" 
  }
}));



app.use("/api/users", userRoutes);
app.use("/api/skills", skillRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Backend is running!" });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongo AtlasDB connected"))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

