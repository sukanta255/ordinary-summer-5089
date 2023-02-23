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

AddDataRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const id=req.params.id
    const AddData=await AddDataModel.findOne({"_id":id})
    // console.log(AddData)
    // res.send(AddData)
    try{
        await AddDataModel.findByIdAndUpdate({"_id":id},payload)
        res.send("kapda updated")
    }catch(err){
        res.send({"msg":"something went wrong"})
    }
}) 

AddDataRouter.delete("/delete/:id",async(req,res)=>{
    
    const id=req.params.id
    try{
        await AddDataModel.findByIdAndDelete({"_id":id})
        res.send("kapda deleted")
    }catch(err){
        res.send({"msg":"something went wrong",err})
    }
}) 

module.exports={
    AddDataRouter
}