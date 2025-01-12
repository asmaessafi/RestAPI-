const mongoose= require('mongoose');
const client=process.env.MONGO_URI;

const connect=mongoose.connect(client)
.then(()=>console.log('Connected to MongoDB'))  
.catch((err)=>console.log(err));


module.exports=connect;

