import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { accessToken, refreshToken, maxAge } = await req.json()
  const cookieObject = { accessToken, refreshToken, maxAge }

  cookies().set('token', JSON.stringify(cookieObject), {
    httpOnly: true,
    secure: true,
    maxAge,
    sameSite: 'strict'
  })

  return NextResponse.json({ message: "success" })
}