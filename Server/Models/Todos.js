const mongoose=require('mongoose')
const todoschema=new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
})
const todomodel=mongoose.model("todolists",todoschema)
module.exports=todomodel