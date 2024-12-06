import { handlerError } from "@/app/helpers/errorHandler";
import Wishlist from "@/models/wishlist";

import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;

    const userId = request.headers.get("x-user-id") as string;

    await Wishlist.create({ userId, productId });
    return NextResponse.json({
      status: 200,
      message: "Success add wishlist",
    });
  } catch (error) {
    return handlerError(error);
  }
}
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await Wishlist.delete(params.id);
    return NextResponse.json({
      status: 200,
      message: "Success delete wishlist",
    });
  } catch (error) {
    return handlerError(error);
  }
}
