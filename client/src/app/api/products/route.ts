import Product from "@/models/products";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await Product.getAll();
  return NextResponse.json(products, {
    status: 200,
  });
}
