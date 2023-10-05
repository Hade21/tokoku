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
  addToCart = async (body: AddCartParams) => {
    return axios.post<AddCartParams, AxiosResponse>(`${baseUrl}/cart`, body)
  }
}

export default new UserServices