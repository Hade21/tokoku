export const SetTokenCookies = ({ accessToken }: { accessToken: string }) => {
  return fetch('/api/storeToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      accessToken
    })
  })
}

export const GetTokenCookies = async () => {
  const res = await fetch('../api/accessToken')
  return await res.json()
}