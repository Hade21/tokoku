export const SetTokenCookies = ({ accessToken, refreshToken, maxAge }: { accessToken: string, refreshToken: string, maxAge: number }) => {
  return fetch('/api/storeToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      accessToken,
      refreshToken,
      maxAge
    })
  })
}

export const GetTokenCookies = async () => {
  const res = await fetch('../api/accessToken')
  return await res.json()
}