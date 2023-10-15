import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import jwt_decode, { JwtPayload } from 'jwt-decode'
import axios from 'axios'

export async function GET(req: NextRequest) {
  const tokenCookies = cookies().get('token')
  const parsedCookies = JSON.parse(tokenCookies?.value ?? '{}')
  const accessToken = parsedCookies.accessToken
  const refreshToken = parsedCookies.refreshToken

  if (!accessToken) {
    const url = req.nextUrl.clone()
    url.pathname = '/user/login'
    return NextResponse.redirect(url)
  }

  const { exp } = jwt_decode<JwtPayload>(accessToken)
  const isExpired = Date.now() > exp! * 1000

  if (isExpired) {
    const refresh = await axios.post('https://tokoku-server.fly.dev/api/v1/user/refresh', { refreshToken: refreshToken })
    cookies().set('token', JSON.stringify({ accessToken: refresh.data.accessToken, refreshToken }), {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'strict'
    })
    return NextResponse.json({ message: "success", accessToken: refresh.data.accessToken })
  }


  return NextResponse.json({ message: "success", accessToken })
}