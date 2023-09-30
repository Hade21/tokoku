import { cookies } from 'next/headers'

export async function POST(req: Request) {
  const { accessToken, refreshToken, maxAge } = await req.json()
  const cookieObject = { accessToken, refreshToken, maxAge }

  cookies().set('token', JSON.stringify(cookieObject), {
    httpOnly: true,
    secure: true,
    maxAge,
    sameSite: 'strict'
  })

  return Response.json({ message: "success" })
  // res.setHeader('Set-Cookie', cookie.serialize('token', JSON.stringify(cookieObject), {
  //   httpOnly: true,
  //   secure: true,
  //   maxAge,
  //   sameSite: 'strict',
  // }))
  // res.status(200).json({ message: 'success' })

}