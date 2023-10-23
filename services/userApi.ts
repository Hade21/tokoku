import { GetTokenCookies } from '@/app/lib/tokenCookies';
import { AddCartParams, UserData, loginResponse, registerResponse } from '@/types';
import axios, { AxiosResponse } from 'axios'

const baseUrl = 'https://tokoku-server.fly.dev/api/v1/user'

class UserServices {
  login(user: Pick<UserData, 'email' | 'password'>) {
    return axios.post<Pick<UserData, 'email' | 'password'>, AxiosResponse<loginResponse>>(baseUrl + '/login', user)
  }
  register(user: Omit<UserData, '_id' | 'address'>) {
    return axios.post<Omit<UserData, '_id' | 'address'>, AxiosResponse<registerResponse>>(baseUrl + '/register', user)
  }
  async addToCart(body: AddCartParams) {
    const NO_TOKEN = "No access token"
    const data = await GetTokenCookies()
    console.log("🚀 ~ file: userApi.ts:17 ~ UserServices ~ addToCart ~ data:", data)
    if (data.message === NO_TOKEN) {
      throw new Error(NO_TOKEN)
    }
    return axios.post<AddCartParams, AxiosResponse>(`${baseUrl}/cart`, body, {
      headers: {
        Authorization: `Bearer ${data.accessToken}`
      }
    })
  }
  async getRefreshToken(refreshToken: string) {
    const res = await axios.post<String, AxiosResponse>('https://tokoku-server.fly.dev/api/v1/user/refresh', { refreshToken })
    console.log("🚀 ~ file: userApi.ts:29 ~ UserServices ~ getRefreshToken ~ res:", res)
    return res
  }
}

export default new UserServices