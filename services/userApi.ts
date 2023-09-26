import { UserData } from '@/types';
import axios from 'axios'

const baseUrl = 'https://tokoku-server.fly.dev/api/v1/user'

class UserServices {
  login(user: Pick<UserData, 'email' | 'password'>) {
    return axios.post(baseUrl + '/login', user)
  }
  register(user: Omit<UserData, '_id' | 'address'>) {
    return axios.post(baseUrl + '/register', user)
  }
}

export default new UserServices