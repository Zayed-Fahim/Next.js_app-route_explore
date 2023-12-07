import { NextResponse } from "next/server";
import db from "@/db.json";

export const GET = (req, { params }) => {
  const product = db.products.find((product) => product.id === +params.id);
  if (product) {
    return NextResponse.json(product);
  }
  return NextResponse.json({ message: "No product found", status: 404 });
};

export const PATCH = async (req, { params }) => {
  const body = await req.json();
  const index = db.products.findIndex((product) => product.id === +params?.id);
  db.products[index] = { ...db.products[index], ...body };
  return NextResponse.json({
    message: "Product Update Successfully",
  });
};

export const DELETE = async ({ params }) => {
  db.products = db.products.filter((product) => product.id !== +params?.id);
  return NextResponse.json({
    message: "Product Deletion Successful",
  });
};
