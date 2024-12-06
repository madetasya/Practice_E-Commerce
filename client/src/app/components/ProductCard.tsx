import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "../types";
import AddWishlist from "./AddWishlist";

type Props = {
  product: ProductType;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="relative flex flex-col max-w-xs bg-white rounded-lg shadow-lg dark:bg-gray-800 cursor-pointer hover:shadow-xl transition-shadow duration-300">
      <Link href={`/products/${product.slug}`} passHref>
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            className="object-cover w-full h-64 transition-transform duration-500 hover:scale-105"
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={400}
          />
          <AddWishlist id={product._id} />
        </div>
      </Link>
      <div className="p-5 flex flex-col justify-between h-full">
        <Link href={`/products/${product.slug}`} passHref>
          <div>
            <p className="text-lg font-bold text-gray-800 dark:text-white">
              {product.name}
            </p>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-200 line-clamp-2">
              {product.description}
            </p>
          </div>
        </Link>
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {product.price}
          </span>
          <Link href={`/products/${product.slug}`} passHref>
            <button className="btn btn-secondary btn-sm hover:scale-105 transition-transform">
              See Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
