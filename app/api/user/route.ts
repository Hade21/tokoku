import axios from 'axios'

type registerBody = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string
}
type loginBody = {
    email: string,
    password: string
}

export async function login({ email, password }: loginBody) {
    const body = { email, password }
    const res = await axios.post('https://tokoku-server.fly.dev/api/v1/user/login', body)
    return res
}

export async function register(bodyAtt: registerBody) {
    const body = { ...bodyAtt }
    const res = await axios.post('https://tokoku-server.fly.dev/api/v1/user/register', body)
    return res
}