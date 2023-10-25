import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import jwt_decode, { JwtPayload } from 'jwt-decode'
import userServices from "@/services/userApi"
import axios from 'axios'

export async function GET() {
  const tokenCookies = cookies().get('token')
  const parsedCookies = JSON.parse(tokenCookies?.value ?? '{}')
  const accessToken = parsedCookies.accessToken ?? undefined
  const refreshToken = parsedCookies.refreshToken ?? undefined
  if (!accessToken) {
    return NextResponse.json({ message: "No access token" })
  }
  const { exp } = jwt_decode<JwtPayload>(accessToken)
  const isExpired = Date.now() > exp! * 1000

  if (isExpired) {
    try {
      const res = await axios({ method: "POST", url: 'https://tokoku-server.fly.dev/api/v1/user/refresh', data: { refreshToken } })
      cookies().set('token', JSON.stringify({ accessToken: res.data.accessToken, refreshToken }), {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'strict'
      })
      return NextResponse.json({ message: 'Success', accessToken: res.data.accessToken })
    } catch (error) {
      return NextResponse.json(error)
    }
  }
  else {
    return NextResponse.json({ message: "success", accessToken })
  }
}