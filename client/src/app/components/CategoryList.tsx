"use client";
import React from "react";
import Link from "next/link";

export default function CategoryList() {
  return (
    <div className="flex-none hidden lg:flex pt-3  pl-10">
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button">
          Categories
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <Link
              href="/perfume"
              className="mx-3 text-white-500 hover:text-pink-400"
            >
              Perfume
            </Link>
          </li>
          <li>
            <Link
              href="/skincare"
              className="mx-3 text-white-500 hover:text-pink-400"
            >
              Skin Care
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
