const express =require('express');
require('dotenv').config({path:'config/.env'});
const port=process.env.PORT || 5001;

const app=express();
const connect =require('./connectDatabase.js');
userRoutes=require('./Routes/userRoute.js');

app.use(express.json());
app.use('/api/users',userRoutes)



app.listen(port,(err)=>{
err?console.log(err):console.log(`Server is running on port ${port}`);
});


 