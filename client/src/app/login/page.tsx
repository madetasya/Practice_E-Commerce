"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { login } from "../action";
import Swal from "sweetalert2";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (element: FormEvent<HTMLFormElement>) => {
    element.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (!res.ok) {
        throw data;
      }

      login(data.token);

      Swal.fire({
        title: "Success!",
        text: "Login successful!",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#007bff",
        customClass: {
          confirmButton:
            "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md",
        },
      }).then(() => {
        router.push("/");
      });
    } catch (error) {
      console.log(error);

      Swal.fire({
        title: "Error!",
        text: "Login failed! Ivalid email or password",
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

  const handleChange = (element: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = element.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-primary">
      <div className="w-full max-w-sm p-6 bg-neutral rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              className="input input-bordered w-full mt-1"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              className="input input-bordered w-full mt-1"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
