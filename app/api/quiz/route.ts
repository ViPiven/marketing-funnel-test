import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Quiz Results Received:", data);

    return NextResponse.json(
      { success: true, received: data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error parsing quiz results:", error);
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}