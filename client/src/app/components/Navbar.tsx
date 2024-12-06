"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import LILLI from "../assets/LILLI.png"; 

export default function Navbar() {
  const path = usePathname(); //
  const displayPath = path.split("/").filter((part) => part);

  return (
    <div>
      <nav className="bg-neutral shadow-md pt-6 pb-6">
        <div className=" pl-5 flex justify-between items-center">
          <div>
            <Link href="/">
              <Image src={LILLI} alt="Lilli" className="w-70 mr-4" />
            </Link>
          </div>

          <div className="flex items-center ml-8">
            <Link href="/cart" className="text-white hover:underline">
              CART
            </Link>
            <div className="flex items-center ml-8 ">
              <Link href="/wishlist" className="text-pink-500 hover:underline">
                WISHLIST
              </Link>

              <div className="flex items-center md:mx-8 ">
                <Link
                  href="/login"
                  className="btn btn-secondary"
                >
                  LOGIN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="breadcrumbs text-sm pt-2 pl-10">
        <ul className="flex space-x-2">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>

          {displayPath.map((part, index) => {
            const href = "/" + displayPath.slice(0, index + 1).join("/");
            const isLast = index === displayPath.length - 1;

            return (
              <li key={index}>
                {!isLast ? (
                  <Link href={href} className="hover:underline capitalize">
                    {decodeURIComponent(part)}
                  </Link>
                ) : (
                  <span className="capitalize">{decodeURIComponent(part)}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
