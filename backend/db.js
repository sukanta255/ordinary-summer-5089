const mongoose=require("mongoose")
mongoose.set('strictQuery',true)

const connection =mongoose.connect("mongodb://127.0.0.1:27017/random")

module.exports={
    connection
}