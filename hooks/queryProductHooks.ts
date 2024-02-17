import { useQuery, useMutation } from '@tanstack/react-query'
import productServices from '../services/productApi'
import { NewProduct, ProductAPIParams } from '@/types'

export const useGetProducts = (params: ProductAPIParams) => {
  return useQuery({
    queryKey: ['product', params],
    queryFn: () => productServices.getProducts(params),
  })
}

export const useGetDetailProduct = (id: string) => {
  return useQuery(['detailProduct', id], () => productServices.getDetailProduct(id))
}

export const useAddNewProduct = () => {
  return useMutation({ mutationFn: (body: NewProduct) => productServices.addNewProduct(body) })
}

export const useUpdateProduct = () => {
  return useMutation({ mutationFn: ({ id, body }: { id: string, body: NewProduct }) => productServices.updateProduct({ id, body }) })
}

export const useUploadImages = () => {
  return useMutation({ mutationFn: ({ id, body }: { id: string, body: FormData }) => productServices.uploadImages({ id, body }) })
}