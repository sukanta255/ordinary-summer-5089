import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
// import AdminSidebar from './AdminSidebar'
import styles from "./AddData.module.css"
import AdminSidebar from './AdminSidebar'


const UpdateData = () => {


  const [price,setPrice]=useState("")
  const [description,setDiscription]=useState("")
  const [image,setImage]=useState("")
  const [badgeType,setBadgeType]=useState("")
  const [isMale,setIsmale]=useState("")
  const [reducePrice,setReducedPrice]=useState("")
  const [hasMultiplePrices,setHasMultiplePrice]=useState("")
  const [isOutlet,setIsOutlet]=useState("")
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
    fetch("https://enchanting-gold-tie.cyclic.app/adddata/update",{
      method:"PATCH",
      body:JSON.stringify(payload),
      headers:{
        "Content-type":"application/json",
        "Authorization":localStorage.getItem("authToken")
      }
    }).then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
   }


  return (
    <div style={{backgroundColor:"red",display:"flex",alignItems:"center",justifyContent:"center"}}>

        <Box w={"20%"}>
            <AdminSidebar/>
        </Box>
        <Box w={"100%"} style={{backgroundColor:"blue",margin:"auto",alignItems:"center",justifyContent:"center"}}>

        
      <h1 style={{marginLeft:"40%",fontSize:"20px"}} >Update Page</h1>
       <div className={styles.container} style={{backgroundColor:"pink"}}>
        <input type="number" value={price}  placeholder='Price' onChange={(e)=>setPrice(e.target.value)}/>
        <input type="text" value={description}  placeholder='Description' onChange={(e)=>setDiscription(e.target.value)}/>
        <input type="text" value={image}  placeholder='Image' onChange={(e)=>setImage(e.target.value)}/>
        <input type="text" value={badgeType}  placeholder='badgeType' onChange={(e)=>setBadgeType(e.target.value)}/>
        <div className={styles.radiobtn}>
        Ismale:
        <label for="genderT">True</label>
        <input type="radio" id='genderT' value={true} name="gender" onChange={(e)=>setIsmale(e.target.value)} />
        <label for="genderF">False</label>
        <input  type="radio" id='genderF' value={false} name="gender" onChange={(e)=>setIsmale(e.target.value)} />
        </div>
       
        <input  type="text" value={reducePrice}  placeholder='reducePrice' onChange={(e)=>setReducedPrice(e.target.value)}/>
        <div className={styles.radiobtn} >
        hasMultiplePrices:
        <label for="hasMultiplePricesT">True</label>
        <input type="radio" id='hasMultiplePricesT' name='hasMultiplePrices' value={true} onChange={(e)=>setHasMultiplePrice(e.target.value)}/>
        <label for="hasMultiplePricesF">False</label>
        <input type="radio" id='hasMultiplePricesF' name='hasMultiplePrices' value={false} onChange={(e)=>setHasMultiplePrice(e.target.value)}/>
         
        </div>

        <div className={styles.radiobtn} >
        IsOutlet:
        <label for="isoutletT">True</label>
        <input type="radio" value={true} id="isoutletT" name="isoutlet" onChange={(e)=>setIsOutlet(e.target.value)}  />
        <label for="isoutletF">False</label>
        <input type="radio"  value={false} id="isoutletF" name="isoutlet" onChange={(e)=>setIsOutlet(e.target.value)} />
        </div>
        <div className={styles.radiobtn}>
          IsSellimgFast
        <label for="isSellingFastT">True</label>
        <input type="radio" id="isSellingFastT" value={true} name="isSellingFast"  onChange={(e)=>setIsSellingFast(e.target.value)}/>
        <label for="isSellingFastF">False</label>
        <input type="radio" id="isSellingFastF" value={false} name="isSellingFast" onChange={(e)=>setIsSellingFast(e.target.value)}/>

        </div>
        <input type="text" value={color}  placeholder='Color' onChange={(e)=>setColor(e.target.value)}/>
        <input type="text" value={categoryName}  placeholder='categoryName' onChange={(e)=>setCategoryName(e.target.value)}/>
        <input type="text" value={mainCategory}  placeholder='mainCategory' onChange={(e)=>setMainCategory(e.target.value)}/>
        <input type="text" value={brandName}  placeholder='brandName' onChange={(e)=>setBrandName(e.target.value)}/>
        <input type="text" value={productRating}  placeholder='productRating' onChange={(e)=>setProductRating(e.target.value)}/>
        <input type="text" value={productDescription}  placeholder='productDescription' onChange={(e)=>setProductDescription(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
   
         
         

       </div>
       </Box>
    </div>
  )
}

export default UpdateData