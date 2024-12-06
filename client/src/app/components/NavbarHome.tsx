"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LILLI from "../assets/LILLI.png";

export default function NavbarHome() {
 


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
                <Link href="/login" className="btn btn-secondary">
                  LOGIN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
