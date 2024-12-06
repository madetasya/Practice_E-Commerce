import Wishlist from "@/models/wishlist";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  
  const userId = request.headers.get("x-user-id") as string;
  
  const data = await Wishlist.all(userId);
  return NextResponse.json(data, {
    status: 200,
  });
}
