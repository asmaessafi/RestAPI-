const mongoose =require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    Country:{
        type:String,
        required:true,
    },
    age:Number
})


const User=mongoose.model('user',userSchema)

module.exports=User;