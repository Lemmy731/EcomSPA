"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // assuming you have this

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44338/api/Product/products", {
        withCredentials: true, 
         httpsAgent: new (require("https").Agent)({
          rejectUnauthorized: false,
        }),
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {products.map((product : any, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
