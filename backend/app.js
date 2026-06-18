const express  = require('express');

const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const PORT= 3000;

//enable cors
app.use(cors());
//enable json parser
app.use(express.json());

const customerRoutes = require('./routes/customers');
//use the route
app.use('/api/customers', customerRoutes);

app.get("/",(req,res) =>{
    res.send("Hello World");
})
app.listen(PORT,(err)=>{
    if(!err){
        console.log("Server is listening on port...",PORT);
    }else{
        console.log("error is there")
    }
})

main().catch((error) => {
    console.log(error)
})
async function main(){
    const connectionString = 'mongodb+srv://anagha:Hardpassword123@cluster0.efv6dop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(connectionString);
    mongoose.set('strictQuery',true);
}
