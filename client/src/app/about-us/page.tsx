"use client";

import React from "react";
import Image from "next/image";
import AboutUsImage from "../assets/about-us.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold mb-6">About Sociol</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <Image
              src={AboutUsImage}
              alt="About Us"
              width={600}
              height={400}
              className="rounded"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-lg font-semibold">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              mauris lectus, rhoncus ut lacus nec, facilisis suscipit sem.
              Quisque convallis varius aliquet. Aenean lobortis porttitor
              dapibus. Duis blandit id purus maximus sagittis. Quisque in sem
              sit amet nibh cursus dignissim et vel ante. Aliquam sed dictum
              libero. Phasellus ac gravida nibh, id fermentum dui. Vestibulum id
              sem nec nisl ultricies convallis. Nullam ut porttitor odio.
              Phasellus sapien tortor, fermentum non fringilla fermentum,
              posuere ac lorem. In hac habitasse platea dictumst.
            </p>

            <h2 className="text-lg font-semibold">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              mauris lectus, rhoncus ut lacus nec, facilisis suscipit sem.
              Quisque convallis varius aliquet. Aenean lobortis porttitor
              dapibus. Duis blandit id purus maximus sagittis. Quisque in sem
              sit amet nibh cursus dignissim et vel ante. Aliquam sed dictum
              libero. Phasellus ac gravida nibh, id fermentum dui. Vestibulum id
              sem nec nisl ultricies convallis. Nullam ut porttitor odio.
              Phasellus sapien tortor, fermentum non fringilla fermentum,
              posuere ac lorem. In hac habitasse platea dictumst.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
