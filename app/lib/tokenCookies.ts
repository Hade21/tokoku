export const SetTokenCookies = ({ accessToken, refreshToken, _id }: { accessToken: string, refreshToken: string, _id: string }) => {
  return fetch('/api/storeToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      accessToken, refreshToken, _id
    })
  })
}

export const GetTokenCookies = async () => {
  const res = await fetch('../api/accessToken')
  return await res.json()
}