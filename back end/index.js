const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectionDB = require("./configs/db");

const app = express();

//middleware
app.use(express.json({ limit: "10mb" }));
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("success");
});
app.use("/api", require("./routes/upload-image"));

//server configeration
const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  try {
    await connectionDB();
    console.log(`server is running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
