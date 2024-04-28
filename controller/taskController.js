const Task=require('../models/Task');


async function createTask(req,res){
    try{
        const { title, description, status } = req.body;
        const task = new Task({ title, description, status });
        const newTask = await task.save();
        res.status(201).json({ newTask, message: "Task Created Successfully" });

    }
    catch(err){
        res.status(400).json({message:err.message});
    }

}

async function getAllTasks(req,res){
    try{
        const tasks=await Task.find();
        res.json(tasks);

    }
    catch(err){
        res.status(500).json({message:err.message})

    }
}
async function getTaskById(req,res){
    res.json(res.task);

}

async function updateTask(req,res){
    try{
       const { title, description, status } = req.body;
       if(title)res.task.title=title;
       if(description)res.task.description=description;
       if(status)res.task.status=status;
       const updatedTask=await res.task.save();
       res.json({updatedTas,message:"Task updated successfully"});

    }
    catch(err){
      res.status(400).json({message:err.message});
    }
}

async function deleteTask(req,res){
    try{
       await Task.findByIdAndDelete(req.params.id);
        res.json({message:"Task deleted successfully"});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
module.exports={createTask,getAllTasks,getTaskById,updateTask,deleteTask};