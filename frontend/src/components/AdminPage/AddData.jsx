import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import styles from "./AddData.module.css"


const AddData = () => {


  const [price,setPrice]=useState("")
  const [description,setDiscription]=useState("")
  const [image,setImage]=useState("")
  const [badgeType,setBadgeType]=useState("")
  const [isMale,setIsmale]=useState("")
  const [reducePrice,setReducedPrice]=useState("")
  const [hasMultiplePrices,setHasMultiplePrice]=useState("")
  const [isOutlet,setIsOutlet]=useState(false)
  const [isSellingFast,setIsSellingFast]=useState("")
  const [color,setColor]=useState("")
  const [categoryName,setCategoryName]=useState("")
  const [mainCategory,setMainCategory]=useState("")
  const [brandName,setBrandName]=useState("")
  const [productRating,setProductRating]=useState("")
  const [productDescription,setProductDescription]=useState("")

   const handleSubmit=()=>{
    const payload={
      price,
      description,
      image,
      badgeType,
      isMale,
      reducePrice,
      hasMultiplePrices,
      isOutlet,
      isSellingFast,
      color,
      mainCategory,
      brandName,
      productRating,
      productDescription,
      quantity:1
    }
    console.log(payload)
   }


  return (
    <div>
        
      
       <div className={styles.container}>
        <input type="text" value={price}  placeholder='Price' onChange={(e)=>setPrice(e.target.value)}/>
        <input type="text" value={description}  placeholder='Description' onChange={(e)=>setDiscription(e.target.value)}/>
        <input type="text" value={image}  placeholder='Image' onChange={(e)=>setImage(e.target.value)}/>
        <input type="text" value={badgeType}  placeholder='badgeType' onChange={(e)=>setBadgeType(e.target.value)}/>
        <label>ismale</label>
        <input type="radio" value={isMale}  placeholder='isMale' onChange={(e)=>setIsmale(e.target.value)}/>
        <input type="text" value={reducePrice}  placeholder='reducePrice' onChange={(e)=>setReducedPrice(e.target.value)}/>
        <input type="text" value={hasMultiplePrices}  placeholder='hasMultiplePrices' onChange={(e)=>setHasMultiplePrice(e.target.value)}/>
        <input type="text" value={isOutlet}  placeholder='isOutlet' onChange={(e)=>setIsOutlet(e.target.value)}/>
        <input type="text" value={isSellingFast}  placeholder='isSellingFast' onChange={(e)=>setIsSellingFast(e.target.value)}/>
        <input type="text" value={color}  placeholder='Color' onChange={(e)=>setColor(e.target.value)}/>
        <input type="text" value={categoryName}  placeholder='categoryName' onChange={(e)=>setCategoryName(e.target.value)}/>
        <input type="text" value={mainCategory}  placeholder='mainCategory' onChange={(e)=>setMainCategory(e.target.value)}/>
        <input type="text" value={brandName}  placeholder='brandName' onChange={(e)=>setBrandName(e.target.value)}/>
        <input type="text" value={productRating}  placeholder='productRating' onChange={(e)=>setProductRating(e.target.value)}/>
        <input type="text" value={productDescription}  placeholder='productDescription' onChange={(e)=>setProductDescription(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
   
         
         

       </div>

    </div>
  )
}

export default AddData