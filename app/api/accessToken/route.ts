import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
import jwt_decode, { JwtPayload } from 'jwt-decode'

export async function GET(req: NextRequest) {
  const tokenCookies = cookies().get('token')
  const accessToken = JSON.parse(tokenCookies?.value ?? '{}')

  // if (!accessToken) {
  //   const url = req.nextUrl.clone()
  //   url.pathname = '/user/login'
  //   return NextResponse.redirect(url)
  // }

  return NextResponse.json({ message: "success", accessToken })
}