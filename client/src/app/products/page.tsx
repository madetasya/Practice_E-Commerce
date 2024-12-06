"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { getProducts } from "../action";
import { ProductType } from "../types";
import Scroll from "../components/InfiniteScroll";

export default function ProductList() {
  const [data, setData] = useState<ProductType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setData(products);
    };

    fetchProducts();
  }, []);

  const filteredProducts = data.filter((product: ProductType) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div>
        <SearchBar search={setSearchQuery} />
        <h1 className="text-4xl font-bold mb-6 text-center ">Product List</h1>
        <div className="justify-between items-center">
          <Scroll data={filteredProducts} />
        </div>
      </div>
    </>
  );
}
