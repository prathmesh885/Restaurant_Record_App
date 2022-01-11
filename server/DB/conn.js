const mongoose=require('mongoose')
const DB="mongodb://localhost:27017/prathmesh";
mongoose.connect(DB).then(()=>{
    console.log("Connections Succussful");
}).catch((err)=>{
    console.log("No connection");
})