const express = require("express");
require("dotenv").config();
const connect_db = require("./config/db");
const dataRoute = require("./route/dataRoute");

const app = express();
const PORT = process.env.PORT;
connect_db();
app.use(express.json());

app.use("/api/data", dataRoute);

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.listen(PORT, console.log(`SERVER IS RUNNING AT ${PORT}`));
