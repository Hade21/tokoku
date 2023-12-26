import { GetTokenCookies } from '@/app/lib/tokenCookies';
import { AddCartParams, CreateOrderBody, UserForm, loginResponse, registerResponse } from '@/types';
import axios, { AxiosResponse } from 'axios'

const baseUrl = 'https://tokoku-server.fly.dev/api/v1/user'
const NO_TOKEN = "No access token"


class UserServices {
  login(user: Pick<UserForm, 'email' | 'password'>) {
    return axios.post<Pick<UserForm, 'email' | 'password'>, AxiosResponse<loginResponse>>(baseUrl + '/login', user)
  }
  register(user: Pick<UserForm, 'firstName' | 'lastName' | 'email' | 'password' | 'phone'>) {
    return axios.post<Pick<UserForm, 'firstName' | 'lastName' | 'email' | 'password' | 'phone'>, AxiosResponse<registerResponse>>(baseUrl + '/register', user)
  }
  async addToCart(body: AddCartParams) {
    const data = await GetTokenCookies()
    if (data.message === NO_TOKEN) {
      return Promise.reject(new Error(NO_TOKEN))
    }
    return axios.post<AddCartParams, AxiosResponse>(`${baseUrl}/cart`, body, {
      headers: {
        Authorization: `Bearer ${data.data.accessToken}`
      }
    })
  }
  async getUserData() {
    const data = await GetTokenCookies()
    if (data.message === NO_TOKEN) {
      return Promise.reject(new Error(NO_TOKEN))
    }
    return axios.get(`${baseUrl}/${data.data._id}`, {
      headers: {
        Authorization: `Bearer ${data.data.accessToken}`
      }
    },)
  }
  async logout() {
    const data = await GetTokenCookies()
    if (data.message === NO_TOKEN) {
      return Promise.reject(new Error(NO_TOKEN))
    }
    return axios.post<{ refreshToken: string }, AxiosResponse>(baseUrl + '/logout', { refreshToken: data.data.refreshToken }, {
      headers: {
        Authorization: `Bearer ${data.data.accessToken}`
      },
    })
  }
  async getCart() {
    const data = await GetTokenCookies()
    if (data.message === NO_TOKEN) {
      return Promise.reject(new Error(NO_TOKEN))
    }
    return axios.get(baseUrl + '/cart', {
      headers: {
        Authorization: `Bearer ${data.data.accessToken}`
      }
    })
  }
  async checkout(body: CreateOrderBody) {
    const data = await GetTokenCookies()
    if (data.message === NO_TOKEN) {
      return Promise.reject(new Error(NO_TOKEN))
    }
    return axios.post<AxiosResponse>(baseUrl + '/cart/create-order', body, {
      headers: {
        Authorization: `Bearer ${data.data.accessToken}`
      }
    })
  }
}

export default new UserServices