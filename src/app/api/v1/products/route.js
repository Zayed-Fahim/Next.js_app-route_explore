import { NextResponse } from "next/server";
import db from "@/db.json";

export const GET = (req) => {
  // console.log(req.cookies.get(""), req.headers.get("x-forwarded-host"));
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId");
  let products = db.products;
  if (categoryId) {
    products = products.filter((product) => product.categoryId === +categoryId);
  }
  return NextResponse.json(products);
};

export const POST = async (req) => {
  const body = await req.json();
  db.products.push(body);
  return NextResponse.json(products);
};
