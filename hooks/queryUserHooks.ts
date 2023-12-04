import { useQuery, useMutation } from '@tanstack/react-query'
import userServices from '@/services/userApi'
import { AddCartParams, UserData, UserForm } from '@/types';



export const useLogin = () => {
  return useMutation({ mutationFn: (user: Pick<UserForm, 'email' | 'password'>) => userServices.login(user), })
}

export const useRegister = () => {
  return useMutation({ mutationFn: (user: Pick<UserForm, 'firstName' | 'lastName' | 'email' | 'password' | 'phone'>) => userServices.register(user), })
}

export const useAddToCart = () => {
  return useMutation({ mutationFn: (body: AddCartParams) => userServices.addToCart(body), })
}

export const useLogout = () => {
  return useMutation({ mutationFn: () => userServices.logout() })
}

export const useGetUserData = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => userServices.getUserData(),
  })
}

export const getCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: () => userServices.getCart()
  })
}