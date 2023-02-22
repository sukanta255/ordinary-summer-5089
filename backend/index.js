const express=require("express")
const {connection}=require("./db")
 const {AddDataRouter}=require("./routes/DataAdd.routes")

const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Abhisek welcome you to home page")
})
app.use("/adddata",AddDataRouter)

app.listen(4100,async()=>{
    try{
        await connection
        console.log("connected to db")
    }catch(err){
        console.log(err)
    }
    console.log("server is running at 4100")
})