"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    username: "",
    name: "",
    password: "",
  });

  const handleChange = (element: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = element.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL); // Debugging line

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Registration successful!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#007bff",
          customClass: {
            confirmButton:
              "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md",
          },
        }).then(() => {
          router.push("/login");
        });
      } else {
        throw new Error("Failed to register");
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Error!",
        text: "Registration failed!",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#007bff",
        customClass: {
          confirmButton:
            "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md",
        },
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg bg-white p-8 border border-gray-300 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Create an Account</h2>
        <p className="text-sm text-gray-600 mb-6">
          <span className="text-red-500">*</span> Required fields
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              NAME <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              USERNAME <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              EMAIL ADDRESS <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter a valid email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              PASSWORD <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
            <small className="text-gray-500 text-xs block mt-1">
              Password must be at least 8 characters, and contain both letters
              and numbers. Only these symbols can be used: -@_
            </small>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
