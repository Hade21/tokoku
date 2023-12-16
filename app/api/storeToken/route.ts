import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { accessToken, refreshToken, _id } = await req.json()

  cookies().set('token', JSON.stringify({ accessToken, refreshToken, _id }), {
    httpOnly: true,
    secure: false,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: 'strict'
  })

  return NextResponse.json({ message: "success" })
}