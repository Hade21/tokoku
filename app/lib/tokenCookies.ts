export const SetTokenCookies = ({ accessToken, refreshToken }: { accessToken: string, refreshToken: string }) => {
  return fetch('/api/storeToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      accessToken, refreshToken
    })
  })
}

export const GetTokenCookies = async () => {
  const res = await fetch('../api/accessToken')
  return await res.json()
}