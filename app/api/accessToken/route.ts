import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import jwt_decode, { JwtPayload } from 'jwt-decode'
import axios from 'axios'

export async function GET() {
  const tokenCookies = cookies().get('token')
  const parsedCookies = JSON.parse(tokenCookies?.value ?? '{}')
  const accessToken = parsedCookies.accessToken ?? undefined
  const refreshToken = parsedCookies.refreshToken ?? undefined
  const _id = parsedCookies._id ?? undefined
  if (!accessToken) {
    return NextResponse.json({ message: "No access token" })
  }
  const { exp } = jwt_decode<JwtPayload>(accessToken)
  const isExpired = Date.now() > exp! * 1000

  if (isExpired) {
    try {
      const res = await axios({ method: "POST", url: 'https://tokoku-server.fly.dev/api/v1/user/refresh', data: { refreshToken } })
      cookies().set('token', JSON.stringify({ _id, accessToken: res.data.accessToken, refreshToken }), {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'strict'
      })
      return NextResponse.json({ message: 'Success', data: { _id, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken } })
    } catch (error) {
      return NextResponse.json(error)
    }
  }
  else {
    return NextResponse.json({ message: "success", data: { _id, accessToken, refreshToken } })
  }
}