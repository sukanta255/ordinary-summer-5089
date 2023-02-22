const express=require("express")
const {AddDataModel}=require("../model/DataAdd.model")
// const cors=require("cors")
const AddDataRouter=express.Router()
// AddDataRouter.use(cors())

AddDataRouter.get("/",async(req,res)=>{
    const AddDatas= await AddDataModel.find()

    res.send(AddDatas)
})

AddDataRouter.post("/create",async(req,res)=>{
    // res.send("creating the data")
    const payload =req.body
    const AddData=new AddDataModel(payload)
    await AddData.save()
    console.log(AddData)
    res.send({"msg":"data is Addwd"})
})

module.exports={
    AddDataRouter
}