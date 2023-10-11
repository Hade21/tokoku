import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { accessToken } = await req.json()
  // const cookieObject = { accessToken, refreshToken, maxAge }

  cookies().set('token', JSON.stringify(accessToken), {
    httpOnly: true,
    secure: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: 'strict'
  })

  return NextResponse.json({ message: "success" })
}