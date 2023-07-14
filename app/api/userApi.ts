export async function getUser(id: string) {
    const user = await fetch(`https://tokoku-server.fly.dev/api/v1/user/${id}`)
    if (!user.ok) throw new Error('Error fetching user')
    return user.json()
}