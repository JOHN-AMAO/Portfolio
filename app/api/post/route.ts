import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const post = await req.body;
  console.log(post);
  return NextResponse.json({ post });
}

export async function GET() {
  return NextResponse.json({ status: "I am working" });
}
