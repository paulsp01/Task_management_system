const express=require('express');
const router=express.Router();
//const Task=require('../models/Task');
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask }=require('../controller/taskController');
const getTaskMiddleware  =require('../middilware/taskMiddileware.js');


router.post("/tasks", createTask);
router.get("/tasks", getAllTasks);
router.get("/tasks/:id",getTaskMiddleware, getTaskById);
router.put("/tasks/:id", getTaskMiddleware, updateTask);
router.delete("/tasks/:id", getTaskMiddleware, deleteTask);


module.exports=router;