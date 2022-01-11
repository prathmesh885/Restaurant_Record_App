
const express = require('express');
const bcrypt = require('bcryptjs');
const { realpathSync } = require('fs');
const router = express.Router();
const User = require('../models/userSchema');
router.get('/', (req, res) => {
    res.send("Hello from the auth")
})

router.post('/register', async (req, res) => {
    const { name, email, pass, copass } = req.body;


    if (!name || !email || !pass || !copass) {
        return res.status(422).json({ err: "Please fill all the fiels" });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ err: "Email already axits" });
        } else if (copass != pass) {
            return res.status(422).json({ err: "Password Mismatch" });
        } else {
            const user = new User({ name, email, pass, copass });
            //Conver to hash
            const userRegister = await user.save();
            res.status(201).json({ msg: "Successfully1" });
        }




        // if(userRegister){
        //     
        // }else{
        //     res.status(500).json({msg: "Not Successfully"});
        // }

    } catch (err) {
        console.log(err);
    }



    // //With Promise
    // User.findOne({email: email})
    // .then((userExist)=>{
    //     if(userExist){
    //         return res.status(422).json({err: "Email already axits"});
    //     }

    //     const user = new User({name, email, pass, copass});
    //     user.save().then(()=>{
    //         res.status(201).json({msg: "Successfully1"});
    //     }).catch((err)=>{
    //         res.status(500).json({msg: "Not Successfully"});
    //     })
    // }).catch(err=>{console.log(err);})

})



router.post('/signin', async (req, res) => {
    try {
        const { email, pass } = req.body;

        if (!email || !pass) {
            res.status(400).json({ err: "Fill all the" })
        }

        const userLogin = await User.findOne({ email: email });


        
        if (userLogin) {
            const isMatch = await bcrypt.compare(pass, userLogin.pass)
            if (!isMatch) {
                res.status(400).json({ err: "User Error" });
            } else {
                res.send(userLogin)
            }
        } else {
            res.status(400).json({ err: "User Error" });
        }
        // res.send(userLogin)

        // res.json({mess:"Login Succ"})
    } catch (err) {
        console.log(err);
    }
})







module.exports = router;