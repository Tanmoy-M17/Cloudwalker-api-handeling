require("dotenv").config();
const express=require('express');
const mongoose= require('mongoose');
var cors = require("cors");
const bodyparser=require('body-parser');
const cookieParser=require('cookie-parser');
const User=require('./models/user');
const {auth} =require('./middlewares/auth');
const db=require('./config/config').get(process.env.NODE_ENV);
const app=express();
// app use
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(cors())

// database connection
mongoose.Promise=global.Promise;
mongoose.connect(db.DATABASE,{ useNewUrlParser: true,useUnifiedTopology:true },function(err){
    if(err) console.log(err);
    console.log("Database is connected");
});


// adding new user (sign-up route)
app.post('/register',function(req,res){
   // taking a user
   const newuser=new User(req.body);
   if(newuser.password!=newuser.confirmpassword)return res.status(400).json({message: "Password & Confirmpassword Should Be Same"});
   
   User.findOne({email:newuser.email},function(err,user){
       if(user) return res.status(400).json({ auth : false, message :"Email already exits"});

       newuser.save((err,doc)=>{
           if(err) {console.log(err);
               return res.status(400).json({ success : false});}
           res.status(200).json({
               succes:true,
               user : doc
           });
       });
   });
});


// login user
app.post('/login', function(req,res){
    let token=req.cookies.auth;
    User.findByToken(token,(err,user)=>{
        if(err) return  res(err);
        if(user) return res.status(400).json({
            error :true,
            message:"You are already logged in",
        });
    
        else{
            User.findOne({'email':req.body.email},function(err,user){
                if(!user) return res.json({isAuth : false, message : 'Email or password dose not match'});
        
                user.comparepassword(req.body.password,(err,isMatch)=>{
                    if(!isMatch) return res.json({ isAuth : false,message :"Email or password dose not match"});
        
                user.generateToken((err,user)=>{
                    if(err) return res.status(400).send(err);
                    res.cookie('auth',user.token).json({
                        isAuth : true,
                        id : user._id,
                        email : user.email,
                        token:user.token,
                        message:"Login SuccesFully"
                
                    });
                });    
            });
          });
        }
    });
});

//logout user
 app.get('/logout',auth,function(req,res){
        req.user.deleteToken(req.token,(err,user)=>{
            if(err) return res.status(400).send(err);
            res.sendStatus(200);
        });

    }); 

// get logged in user
app.get('/profile',auth,function(req,res){
        res.json({
            isAuth: true,
            id: req.user._id,
            email: req.user.email,
            name: req.user.firstname + req.user.lastname
            
        })
});


app.get('/',function(req,res){
    res.status(200).send(`Welcome to login , sign-up api`);
});

// listening port
const PORT=process.env.PORT||3000;
app.listen(PORT,async()=>{
    try{
       console.log(`Listening on port ${PORT}`);
    }catch(err){
        console.log("Error while connecting To server");
        console.log(err);
    }
    
console.log(`Server is running on port ${PORT}`);
})