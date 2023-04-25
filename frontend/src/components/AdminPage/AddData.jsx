import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
// import AdminSidebar from './AdminSidebar'
import styles from "./AddData.module.css";

const AddData = () => {
  const [price, setPrice] = useState("");
  const [description, setDiscription] = useState("");
  const [image, setImage] = useState("");
  const [badgeType, setBadgeType] = useState("");
  const [isMale, setIsmale] = useState("");
  const [reducePrice, setReducedPrice] = useState("");
  const [hasMultiplePrices, setHasMultiplePrice] = useState("");
  const [isOutlet, setIsOutlet] = useState("");
  const [isSellingFast, setIsSellingFast] = useState("");
  const [colour, setColour] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [brandName, setBrandName] = useState("");
  const [productRating, setProductRating] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleSubmit = () => {
    const payload = {
      price,
      description,
      image,
      badgeType,
      isMale,
      reducePrice,
      hasMultiplePrices,
      isOutlet,
      isSellingFast,
      colour,
      mainCategory,
      brandName,
      productRating,
      productDescription,
      quantity: 1,
    };

    //https://enchanting-gold-tie.cyclic.app
    console.log(payload);

    alert("Data Added Successfully");

    fetch("https://enchanting-gold-tie.cyclic.app/adddata/create", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("authToken"),
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))

      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className={styles.container}>
        <h1 style={{ fontSize: "35px", color: "black", fontWeight: "30px" }}>Add Data Page</h1>
        <input type="number" value={price} placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        <input type="text" value={description} placeholder="Description" onChange={(e) => setDiscription(e.target.value)} />
        <input type="text" value={image} placeholder="Image" onChange={(e) => setImage(e.target.value)} />
        <input type="text" value={badgeType} placeholder="badgeType" onChange={(e) => setBadgeType(e.target.value)} />
        <div className={styles.radiobtn}>
          <p style={{ marginRight: "40%" }}>Ismale:</p>
          <label for="genderT">True</label>
          <input type="radio" id="genderT" value={true} name="gender" onChange={(e) => setIsmale(e.target.value)} />
          <label for="genderF">False</label>
          <input type="radio" id="genderF" value={false} name="gender" onChange={(e) => setIsmale(e.target.value)} />
        </div>

        <input type="text" value={reducePrice} placeholder="reducePrice" onChange={(e) => setReducedPrice(e.target.value)} />
        <div className={styles.radiobtn}>
          <p style={{ marginRight: "20%" }}> hasMultiplePrices:</p>
          <label for="hasMultiplePricesT">True</label>
          <input type="radio" id="hasMultiplePricesT" name="hasMultiplePrices" value={true} onChange={(e) => setHasMultiplePrice(e.target.value)} />
          <label for="hasMultiplePricesF">False</label>
          <input type="radio" id="hasMultiplePricesF" name="hasMultiplePrices" value={false} onChange={(e) => setHasMultiplePrice(e.target.value)} />
        </div>

        <div className={styles.radiobtn}>
          <p style={{ marginRight: "40%" }}>IsOutlet:</p>
          <label for="isoutletT">True</label>
          <input type="radio" value={true} id="isoutletT" name="isoutlet" onChange={(e) => setIsOutlet(e.target.value)} />
          <label for="isoutletF">False</label>
          <input type="radio" value={false} id="isoutletF" name="isoutlet" onChange={(e) => setIsOutlet(e.target.value)} />
        </div>
        <div className={styles.radiobtn}>
          <p style={{ marginRight: "40%" }}> IsSellimgFast</p>
          <label for="isSellingFastT">True</label>
          <input type="radio" id="isSellingFastT" value={true} name="isSellingFast" onChange={(e) => setIsSellingFast(e.target.value)} />
          <label for="isSellingFastF">False</label>
          <input type="radio" id="isSellingFastF" value={false} name="isSellingFast" onChange={(e) => setIsSellingFast(e.target.value)} />
        </div>
        <input type="text" value={colour} placeholder="Colour" onChange={(e) => setColour(e.target.value)} />
        <input type="text" value={categoryName} placeholder="categoryName" onChange={(e) => setCategoryName(e.target.value)} />
        <input type="text" value={mainCategory} placeholder="mainCategory" onChange={(e) => setMainCategory(e.target.value)} />
        <input type="text" value={brandName} placeholder="brandName" onChange={(e) => setBrandName(e.target.value)} />
        <input type="text" value={productRating} placeholder="productRating" onChange={(e) => setProductRating(e.target.value)} />
        <input type="text" value={productDescription} placeholder="productDescription" onChange={(e) => setProductDescription(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AddData;
