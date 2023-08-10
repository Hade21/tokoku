import { CartBody } from '@/types'
import { revalidateTag } from 'next/cache'

export async function getUser(id: string) {
    const user = await fetch(`https://tokoku-server.fly.dev/api/v1/user/${id}`)
    if (!user.ok) throw new Error('Error fetching user')
    return user.json()
}

export async function addToCart(cartBody: CartBody) {
    const url = new URL('https://tokoku-server.fly.dev/api/v1/cart')
    const body = JSON.stringify({ cart: cartBody })
    try {
        await fetch(url, { method: 'POST', body }).then(res => res.json())
        revalidateTag('cart')
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}