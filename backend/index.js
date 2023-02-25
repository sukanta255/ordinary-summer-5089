
const express=require("express")
const { userRouter } = require("./routes/user");
const { authenticator } = require("./middleware/authentication");
const {connection}=require("./db")
 const {AddDataRouter}=require("./routes/DataAdd.routes")
 require("dotenv").config()

const cors=require("cors");
const { AddDataModel } = require("./model/DataAdd.model");

const app=express()
app.use(express.json())
app.use(cors())
app.use("/users", userRouter);
app.use(authenticator);

app.get("/",(req,res)=>{
    res.send("Abhisek welcome you to home page")
})
app.get("/number",async(req,res)=>{
    const count = await AddDataModel.countDocuments({});
 console.log(count)
    res.send(`${count}`)
})
app.use("/adddata",AddDataRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to db")
    }catch(err){
        console.log(err)
    }
    console.log("server is running at 4100")
})

