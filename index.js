require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const taskRouter = require("./routes/taskRoutes");
const controller = require("./controller/taskController");
const middileware = require("./middilware/taskMiddileware");
const app = express();

const PORT = process.env.PORT||8398;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "task manager is working" });
});
app.use("/", taskRouter);

app.listen(8000, () => {
  console.log(`server works perfectly on port ${PORT}`);
});
