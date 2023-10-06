import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import jwt_decode, { JwtPayload } from 'jwt-decode'

export async function GET() {
  const tokenCookies = cookies().get('token')
  const parsedCookies = JSON.parse(tokenCookies?.value ?? '{}')
  const accessToken = parsedCookies.accessToken

  if (!accessToken) {
    return NextResponse.redirect('/login')
  }

  const { exp } = jwt_decode<JwtPayload>(accessToken) as { exp: number }
  const isExpired = Date.now() / 1000 > exp

  if (isExpired) {
    const refreshToken = parsedCookies.refreshToken
    try {
      const res = await fetch('https://tokoku-server.fly.dev/api/v1/user/refresh', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        credentials: 'include',

      })
      NextResponse.json(res)
    } catch (error) {
      console.log(error)
    }
  }

  // return NextResponse.json({ message: "success" })
}