router=require('express').Router();

const User=require('../models/User.js');

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

router.get('/',(req,res)=>{
    User.find()
    .then((users)=>res.status(201).json(users))
    .catch((err)=>res.status(404).json(err));
})

router.post('/newUser',(req,res)=>{
    const {name, age, Country} = req.body;
    const newUser=new User({name, Country, age});
    newUser.save()
    .then(()=>res.status(200).json({msg:'user added'}))
    .catch((err)=>res.status(400).json(err));
})

// //or :
// router.post('/users/:name/:country/:age',(req,res)=>{
//     const newuser=new User({
//         name:req.params.name,
//         Country:req.params.country,
//         age:req.params.age
//     })
//     newuser.save()
//     .then(()=>res.send('User added'))
//     .catch((err)=>console.log(err));    
// })

router.put('/:id',(req,res)=>{    
    User.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    .then(()=>res.status(200).json({msg:'User updated'}))
    .catch((err)=>res.status(400).json(err));
})

router.delete('/:id',(req,res)=>{
    User.findOneAndDelete({_id:req.params.id})
    .then(()=>res.status(200).json({msg:'User deleted'}))
    .catch((err)=>res.status(400).json(err));
})

module.exports=router;