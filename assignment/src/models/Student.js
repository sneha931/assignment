
const mongoose=require("mongoose")


const StudentSchema=new mongoose.Schema({
    regid:{
        type: Number,
        require:true
    },
    name:{
        type: String,
        require: true
    }
    
})

module.exports=mongoose.model('Student',StudentSchema);