import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import productServices from '@/services/productApi';
import userServices from '@/services/userApi'
import { ProductAPIParams, UserData } from '@/types';

const useGetProducts = (params: ProductAPIParams) => {
  return useQuery(['products', params], () => productServices.getProducts(params))
}

const useLogin = () => {
  return useMutation({ mutationFn: (user: Pick<UserData, 'email' | 'password'>) => userServices.login(user), })
}

const useRegister = () => {
  return useMutation({ mutationFn: (user: Omit<UserData, '_id' | 'address'>) => userServices.register(user), })
}

export { useGetProducts, useLogin, useRegister }