"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getWishlist } from "../action";
import { wishlistType } from "../types";
import WishlistCard from "../components/WishlistCard";

export default function Wishlist() {
  const [list, setList] = useState<wishlistType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWishlist = async () => {
    try {
      const res: wishlistType[] = await getWishlist(); 
      setList(res);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      setError("Failed to load wishlist. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <h4 className="loading-text">Loading, please wait...</h4>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Navbar />
      <div className="wishlist-container">
        {list.length > 0 ? (
          list.map((item: wishlistType, i) => (
            <WishlistCard key={i} item={item} fetchData={fetchWishlist} />
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </>
  );
}
