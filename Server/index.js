const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const todomodel=require('./Models/Todos')
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/todo').then(console.log('database connected'))
app.post('/add',(req,res)=>{
    const task=req.body.task;
    todomodel.create({task:task}).then(result=>res.json(result)).catch(e=>res.json(e))
})
app.get('/get',(req,res)=>{
    todomodel.find().then(result=>res.json(result)).catch(e=>
        res.json(e)
    )
})
app.put('/update/:id',(req,res)=>{
    const {id}=req.params;
    todomodel.findByIdAndUpdate ({_id:id},{done:true}).then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    todomodel.findByIdAndDelete({_id:id}).then(result=>res.json(result))
    .catch(err=>res.json(err))

})
app.listen(3001,()=>{
    console.log('port started at port 3001');
})