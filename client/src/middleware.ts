// middleware.ts
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyJose } from "./app/helpers/jwt";

export async function middleware(request: NextRequest) {
  const authorization = cookies().get("Authorization");

  // Check if the user is logged in
  const isLogin = !!authorization;

  if (request.nextUrl.pathname.startsWith("/api/wishlists")) {
    if (!authorization) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const [type, token] = authorization.value.split(" ");

    if (type !== "Bearer") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
      // Verify token and get payload
      const verifyWithJose = await verifyJose<{ _id: string }>(token);

      // Set user ID in headers for further processing
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-user-id", verifyWithJose._id);

      // Proceed with the response and pass the headers
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.error("Token verification failed:", error);
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 401 }
      );
    }
  }

  if (request.nextUrl.pathname.startsWith("/wishlist")) {
    if (!authorization) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (request.nextUrl.pathname === "/login") {
    if (isLogin) {
      return NextResponse.redirect(new URL("/products", request.url));
    }
  }

  return NextResponse.next();
}
