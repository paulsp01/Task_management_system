const express=require('express');
const router=express.Router();
const task=require('../models/Task');
router.get('/',(req,res)=>{
    res.send('task route is working');
});

router.post('/',(req,res)=>{

})

module.export=router;