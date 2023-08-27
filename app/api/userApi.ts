import { CartBody } from '@/types'
import axios from 'axios'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

export async function login({ email, password }: { email: string, password: string }) {
    const url = new URL('https://tokoku-server.fly.dev/api/v1/user/login')
    const body = { email, password }
    try {
        // const userCookies = cookies()
        // const res = await fetch(url, { method: 'POST', body }).then(res => res.json())
        const res = await axios.post('https://tokoku-server.fly.dev/api/v1/user/login', body)
        console.log(res, body)
        return { res, body }
    }
    catch (error) {
        if (error instanceof Error) {
            return error
        }
    }
}

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