const express =require('express');
require('dotenv').config({path:'config/.env'});
const port=process.env.PORT || 5001;
const User=require('./models/User.js');
const app=express();
const connect =require('./connectDatabase.js');

const Users=[
    {
        name:'John',
        Country:'USA',
        age:30
    },
    {
        name:'Alice',
        Country:'France',
        age:25
    },
    {
        name:'Bob',
        Country:'England',
        age:35
    },
    {
        name:'David',
        Country:'Germany',
        age:40
    },
    {
        name:'Eve',
        Country:'Italy',
        age:20
    },
    {
        name:'Frank',
        Country:'Spain',
        age:45
    },
    {
        name:'Grace',
        Country:'Portugal',
        age:50
    },
    {
        name:'Henry',
        Country:'Russia',
        age:55
    },
    {
        name:'Ivy',
        Country:'China',
        age:60
    },
    {
        name:'Jack',
        Country:'Japan',
        age:65
    },
    {
        name:'Kevin',
        Country:'Korea',
        age:70
    },
    {
        name:'Lily',
        Country:'India',
        age:75
    },
    {
        name:'Mary',
        Country:'Australia',
        age:80
    },
    {
        name:'Nancy',
        Country:'Brazil',
        age:85
    },
    {
        name:'Oscar',
        Country:'Canada',
        age:90
    },
    {
        name:'Peter',
        Country:'Mexico',
        age:95
    },
    {
        name:'Quinn',
        Country:'Argentina',
        age:100
    },
    {
        name:'Rose',
        Country:'Chile',
        age:105
    },
    {
        name:'Sam',
        Country:'Colombia',
        age:110
    },
    {
        name:'Tom',
        Country:'Peru',
        age:115
    }
]

// User.create(Users)
// .then(()=>console.log('Users added'))
// .catch((err)=>console.log(err));

app.get('/users',(req,res)=>{
    User.find()
    .then((users)=>res.send(users))
    .catch((err)=>console.log(err));
})

app.post('/users',(req,res)=>{
    const newUser=new User({
        name:'asma',
        Country:'Pakistan',
        age:25
    })
    newUser.save()
    .then(()=>res.send('User added'))
    .catch((err)=>console.log(err));
})

//or :
app.post('/users/:name/:country/:age',(req,res)=>{
    const newuser=new User({
        name:req.params.name,
        Country:req.params.country,
        age:req.params.age
    })
    newuser.save()
    .then(()=>res.send('User added'))
    .catch((err)=>console.log(err));    
})

app.put('/users',(req,res)=>{
    User.findOneAndUpdate({_id:'67841906f40b92d28dce796f'},{age:85},{new:true})
    .then(()=>res.send('User updated'))
    .catch((err)=>console.log(err));

})

app.delete('/users',(req,res)=>{
    User.findOneAndDelete({_id:'67841906f40b92d28dce7971'})
    .then(()=>res.send('User deleted'))
    .catch((err)=>console.log(err));
})




app.listen(port,(err)=>{
err?console.log(err):console.log(`Server is running on port ${port}`);
});


 