const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
require('./DB/conn')
app.use(express.json())
const User=require('./models/userSchema')
//Middleware (We link the)
const regi= require('./router/auth');
const pro= require('./router/product');
app.use('/user',regi);
app.use('/prod',pro);
const PORT=process.env.PORT || 1111;


app.listen(PORT,()=>{
    console.log("Server at 1111");
})