import Product from "@/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const products = await Product.getBySlug(params.slug);
  return NextResponse.json(products, {
    status: 200,
  });
}
