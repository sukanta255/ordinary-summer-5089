const mongoose=require("mongoose")

const AddDataSchema=mongoose.Schema({
    price:Number,
    description:String,
    image:String,
    badgeType:String,
    isMale:Boolean,
    quantity:Number,
    reducedPrice:String,
    hasMultiplePrices:Boolean,
    isOutlet:Boolean,
    isSellingFast:Boolean,
    color:String,
    categoryName:String,
    mainCatagory:String,
    brandName:String,
    productRating:Number,
    productDescription:String
    
})

const AddDataModel=mongoose.model("AddData",AddDataSchema)

module.exports={
    AddDataModel
}
 

// {      
//     "price": 3000,
//     "description": " winter Pull&Bear roll neck jumper in black",
//     "image": "https://images.asos-media.com/products/pullbear-roll-neck-jumper-in-black/203957880-1-black",
//     "badgeType":"",
//     "isMale":false,
//     "reducedPrice":"",
//     "hasMultiplePrices":false,
//     " isOutlet":false,
//     "isSellingFast": false,
//     "color":"red",
//     "categoryName": "New in",
//     "mainCatagory":"",
//     "brandName": "metronout",
//     "productRating":"",
//     "productDescription": "Jumpers & Cardigans by Pull&BearThe soft stuffPlain designRoll-neckLong sleevesRegular fit",
//     "__v": 0
// }