"use client";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      let response = await fetch("https://dummyjson.com/products");
      response = await response.json();
      setProduct(response.products);
    };
    fetchProduct();
  }, []);
  console.log(product);
  return (
    <>
    
        {product && product.map(items => (

            <div key={items.id}>
              <h5>{items.title}</h5>
              <p>{items.brand}</p>
              <img src={items.thumbnail}/>
              <p>{items.price}</p>

            </div>
          )
        )}
    </>
  );
};

export default Products;
