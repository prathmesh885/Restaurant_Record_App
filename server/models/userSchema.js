const express = require("express");
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    pass:{
        type:String,
        required:true,
    },
    copass:{
        type:String,
        required:true,
    }
});

userSchema.pre('save', async function(next) {
    if(this.isModified('pass')){
        this.pass=await bcrypt.hash(this.pass,12);
        this.copass=await bcrypt.hash(this.copass,12);
    }
    next();
});



///we are crate new collection
const User = new mongoose.model("user",userSchema);

module.exports = User;



