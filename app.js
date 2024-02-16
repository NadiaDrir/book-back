const express =require('express');
const router=require('./route/route.js');
const mongoose =require('mongoose')
const cors = require('cors')
const app=express();
const env=require('dotenv').config();



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
const dbURL = process.env.DB_URL
mongoose.connect(dbURL)
   .then((result)=>{
      app.listen(process.env.PORT||4200)
      console.log('connected')})
   .catch((err)=>console.log(err));




app.use('/api/book',router);





