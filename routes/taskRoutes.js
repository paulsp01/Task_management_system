const express=require('express');
const router=express.Router();
const task=require('../models/Task');

router.post("/tasks", async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const task = new Task({ title, description, status });
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Endpoint to retrieve all tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint to retrieve a single task by its ID
router.get("/tasks/:id", getTask, (req, res) => {
  res.json(res.task);
});

// Endpoint to update a task by its ID
router.put("/tasks/:id", getTask, async (req, res) => {
  try {
    const { title, description, status } = req.body;
    if (title) res.task.title = title;
    if (description) res.task.description = description;
    if (status) res.task.status = status;
    const updatedTask = await res.task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Endpoint to delete a task by its ID
router.delete("/tasks/:id", getTask, async (req, res) => {
  try {
    await res.task.remove();
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getTask(req, res, next) {
  let task;
  try {
    task = await Task.findById(req.params.id);
    if (task == null) {
      return res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.task = task;
  next();
}

module.exports=router;