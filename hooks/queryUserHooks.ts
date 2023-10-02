import { useQuery, useMutation } from '@tanstack/react-query'
import userServices from '@/services/userApi'
import { UserData } from '@/types';



export const useLogin = () => {
  return useMutation({ mutationFn: (user: Pick<UserData, 'email' | 'password'>) => userServices.login(user), })
}

export const useRegister = () => {
  return useMutation({ mutationFn: (user: Omit<UserData, '_id' | 'address'>) => userServices.register(user), })
}
