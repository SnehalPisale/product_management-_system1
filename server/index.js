import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/userRoute.js";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();  
const app = express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.use("/api", router);

app.get("/Pranali", (req, res) => {
  res.send("Hello Everyone");
});

const PORT = process.env.PORT || 5000;
const mongo_URL = process.env.MONGO_URL;

mongoose
  .connect(mongo_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });