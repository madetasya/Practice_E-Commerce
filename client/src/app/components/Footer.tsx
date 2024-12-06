import React from "react";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content p-10">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <div>
          <h6 className="footer-title text-lg mb-4 font-semibold">
            INFORMATION
          </h6>
          <ul className="space-y-2">
            <Link href="/about-us" className="link link-hover">
              About Us
            </Link>
            <li>
              <a
                href="https://wa.me/+6282393151071?text=Halo%20Mba%20kok%20error%20ya"
                className="link link-hover"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="footer-title text-lg mb-4 font-semibold">
            PAYMENT OPTIONS
          </h6>
          <div className="grid grid-cols-3 gap-4">
            <p className="text-red-500">Visa</p>
            <p className="text-red-500">Mastercard</p>
          </div>
        </div>

        <div>
          <h6 className="footer-title text-lg mb-4 font-semibold">
            CUSTOMER CARE
          </h6>
          <p>
            Layanan Pengaduan Konsumen
            <br />
            PT Lilla
          </p>
          <p className="text-red-500">xxx@xxx.com</p>
          <p className="text-red-500">xxx-xxx-xxx</p>
        </div>
      </div>

      <div className="mt-10 border-t border-neutral-content pt-4 flex justify-between items-center">
        <p className="text-sm text-neutral-content">
          © 2024 PT Lilla Ritel Indonesia. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
