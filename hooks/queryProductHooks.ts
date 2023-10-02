import { useQuery, useMutation } from '@tanstack/react-query'
import productServices from '../services/productApi'
import { ProductAPIParams } from '@/types'

export const useGetProducts = (params: ProductAPIParams) => {
  // return useQuery(['products', params], () => productServices.getProducts(params))
  return useQuery({
    queryKey: ['product'],
    queryFn: () => productServices.getProducts(params),
  })
}

export const useGetDetailProduct = (id: string) => {
  return useQuery(['detailProduct', id], () => productServices.getDetailProduct(id))
}
