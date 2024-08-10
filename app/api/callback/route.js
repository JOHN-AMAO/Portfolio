// File: app/api/callback/route.js

import { NextResponse } from "next/server";
import { createHmac } from "crypto";

const VERIFY_TOKEN = process.env.INSTAGRAM_VERIFY_TOKEN;
const APP_SECRET = process.env.INSTAGRAM_APP_SECRET;

async function getRawBody(req) {
  const reader = req.body.getReader();
  const decoder = new TextDecoder();
  let body = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    body += decoder.decode(value);
  }
  return body;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("Webhook verified");
      return new NextResponse(challenge, { status: 200 });
    } else {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return new NextResponse("Bad Request", { status: 400 });
}

export async function POST(request) {
  const rawBody = await getRawBody(request);
  const signature = request.headers.get("x-hub-signature");

  if (!signature) {
    console.error("Couldn't validate the signature.");
    return new NextResponse("Forbidden", { status: 403 });
  }

  const elements = signature.split("=");
  const signatureHash = elements[1];

  const expectedHash = createHmac("sha1", APP_SECRET)
    .update(rawBody)
    .digest("hex");

  if (signatureHash !== expectedHash) {
    console.error("Couldn't validate the request signature.");
    return new NextResponse("Forbidden", { status: 403 });
  }

  console.log("Webhook event received!", JSON.parse(rawBody));
  return new NextResponse("OK", { status: 200 });
}
