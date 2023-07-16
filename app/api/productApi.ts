import type { ProductAPIParams } from '@/types'

export async function getAllProduct(params: ProductAPIParams) {
    const url = new URL('https://tokoku-server.fly.dev/api/v1/product')
    if (params) {
        Object.keys(params).forEach(key => url.searchParams.append(key, String(params[key as keyof ProductAPIParams])))
    }
    try {
        return await fetch(url).then(res => res.json())
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}