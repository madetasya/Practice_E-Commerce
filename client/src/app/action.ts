"use server";
import { cookies } from "next/headers";
import { ProductType } from "./types";

export async function getProducts() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  try {
    const response = await fetch(`${baseUrl}/api/products`, {
      cache: "force-cache",
      next: {
        tags: ["products"],
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data products");
    }

    const products: ProductType[] = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Could not fetch products data");
  }
}

export async function getProductBySlug(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  try {
    const response = await fetch(`${baseUrl}/api/products/${slug}`, {
      cache: "force-cache",
      next: {
        tags: ["products"],
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }

    const product: ProductType = await response.json();
    return product;
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    throw new Error("Could not fetch product data");
  }
}

export async function login(token: string) {
  cookies().set("Authorization", `Bearer ${token}`);
}

//WISHLIST

export async function getWishlist() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`,
    {
      cache: "no-store",
      headers: {
        Cookie: cookies().toString(),
      },
    }
  );

  if (!response.ok) {
    console.log(response);
    throw new Error("Failed to fetch data wishlist");
  }
  const wishlist: ProductType[] = await response.json();

  return wishlist;
}

export async function addWishlist(productId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist/${productId}`,
    {
      method: "POST",
      cache: "no-store",
      headers: {
        Cookie: cookies().toString(),
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data wishlist");
  }
}
export async function deleteWishlist(id: string) {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist/${id}`,
    {
      method: "DELETE",
      cache: "no-store",
      headers: {
        Cookie: cookies().toString(),
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data wishlist");
  }
}
