
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { token } = await req.json()
  ;(await cookies()).set("authToken", token, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  })
  return NextResponse.json({ message: "Token set" })
}
