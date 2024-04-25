const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "task manager is working" });
});

app.listen(8000, () => {
  console.log(`server works perfectly on port ${PORT}`);
});
