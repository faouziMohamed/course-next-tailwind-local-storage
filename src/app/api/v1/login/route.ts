import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("Received POST request with body:", body);
  return NextResponse.json({
    message: "Hello from the Ayaldine route!",
    timestamp: new Date().toISOString(),
  });
}

export async function GET(request: NextRequest,) {
  console.log("Received GET request");
  return NextResponse.json({
    message: "Hello from the Ayaldine route!",
    timestamp: new Date().toISOString(),
  });
}
export async function PUT(request: NextRequest) {
  const body = await request.json();
  console.log("Received PUT request with body:", body);
  return NextResponse.json({
    message: "Hello from the Ayaldine route!",
    timestamp: new Date().toISOString(),
  });
}
