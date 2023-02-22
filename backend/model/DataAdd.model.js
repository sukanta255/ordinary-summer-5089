const mongoose=require("mongoose")

const AddDataSchema=mongoose.Schema({
    price:Number,
    description:String,
    image:String,
    productType:String,
    isScale:Boolean,
    isSellingFast:Boolean,
    color:String,
    categoryName:String,
    brandName:String,
    productDescription:String
})

const AddDataModel=mongoose.model("AddData",AddDataSchema)

module.exports={
    AddDataModel
}
 

// {
      
//     "price": "45.95",
//     "description": "Pull&Bear roll neck jumper in black",
//     "image": "https://images.asos-media.com/products/pullbear-roll-neck-jumper-in-black/203957880-1-black",
//     "productType": "Product",
//     "isSale": false,
//     "isSellingFast": false,
//     "colour": "black",
//     "categoryName": "New in",
//     "brandName": "Pullbear",
//     "productDescription": "Jumpers & Cardigans by Pull&BearThe soft stuffPlain designRoll-neckLong sleevesRegular fit"
//   }