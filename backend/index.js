const express = require("express");
require("dotenv").config();
const connect_db = require("./config/db");
const dataRoute = require("./route/dataRoute");
const path = require("path");

const app = express();
const PORT = process.env.PORT;
connect_db();
app.use(express.json());

app.use("/api/data", dataRoute);

__dirname = path.resolve();
if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API IS RUNNING");
  });
}

app.listen(PORT, console.log(`SERVER IS RUNNING AT ${PORT}`));
