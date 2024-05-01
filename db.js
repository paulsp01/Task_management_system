const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    let dbUrl = "mongodb://0.0.0.0:27017/task_manager";

    const connection = await mongoose.connect(dbUrl);
    console.log(`connected to mongoDb ${mongoose.connection.host}`);
  } catch (error) {
    console.error("Error while connecting to DB", error);
  }
};

module.exports = connectDB();
