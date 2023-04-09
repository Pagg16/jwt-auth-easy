const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/auth";
const authRouter = require("./authRouter");

const app = express();
app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(DB_URI, console.log("mongodb connect"));
    app.listen(PORT, console.log("server started"));
  } catch (e) {
    console.log(e);
  }
};
 
start();
