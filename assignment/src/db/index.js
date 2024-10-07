const mongoose=require("mongoose");


const ConnectDB = async() =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/university')
        console.log('MONGO DB CONNECTED')
    } catch(err){
        console.log("mongoDb Connected error",err)
    }
}

module.exports = ConnectDB;