import { useQuery, useMutation } from '@tanstack/react-query'
import userServices from '@/services/userApi'
import { AddCartParams, UserData } from '@/types';



export const useLogin = () => {
  return useMutation({ mutationFn: (user: Pick<UserData, 'email' | 'password'>) => userServices.login(user), })
}

export const useRegister = () => {
  return useMutation({ mutationFn: (user: Omit<UserData, '_id' | 'address'>) => userServices.register(user), })
}

export const useAddToCart = () => {
  return useMutation({ mutationFn: (body: AddCartParams) => userServices.addToCart(body), })
}
