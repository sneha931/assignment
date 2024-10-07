const express=require("express")
const Router=require("./routes/routes.js")
const cors=require("cors")
const ConnectDB = require("./db/index.js")
const app = express()
const bodyParser = require('body-parser');

app.use(
    cors({
        Credential:true
    })
)
app.use(express.json())
app.use(bodyParser.json());

app.use('/api', Router);













const PORT=3000

ConnectDB().then(
  ()=>{
    app.listen(PORT,() =>{
        console.log(`Server is running ${PORT}`)
    })
  }  
).catch((err) =>{
    console.log("MONGO DB ERROR",err)
})

