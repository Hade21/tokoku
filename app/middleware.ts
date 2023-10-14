import { NextResponse } from 'next/server'

export function middleware() {
    const res = NextResponse.next()

    res.headers.append('Access-Control-Allow-Credentials', 'true')
    res.headers.append('Access-Control-Allow-Origin', '*')
    res.headers.append('Access-Control-Allow-Method', 'GET,DELETE,PATCH,PUT,POST,OPTIONS')
    res.headers.append('Access-Control_Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

    return res
}