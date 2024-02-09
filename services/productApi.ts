import { GetTokenCookies } from '@/app/lib/tokenCookies'
import { DataProductDetail, DataProducts, NewProduct, ProductAPIParams } from '@/types'
import axios, { AxiosResponse } from 'axios'

const baseUrl = 'https://tokoku-server.fly.dev/api/v1/product'
const NO_TOKEN = "No access token"

class ProductServices {
  getProducts = async (params: ProductAPIParams) => {
    return axios.get<ProductAPIParams, AxiosResponse<DataProducts>>(baseUrl, { params }).then(res => { return res.data }).catch(err => { return err })
  }
  getDetailProduct = async (id: string) => {
    return axios.get<string, AxiosResponse<DataProductDetail>>(`${baseUrl}/${id}`).then(res => { return res.data }).catch(err => { return err })
  }
  addNewProduct = async (body: NewProduct) => {
    const data = await GetTokenCookies()
    if (data.message === NO_TOKEN) {
      return Promise.reject(new Error(NO_TOKEN))
    }
    return axios.post<NewProduct, AxiosResponse>(`${baseUrl}/new`, body, {
      headers: {
        Authorization: `Bearer ${data.data.accessToken}`
      }
    }).then(res => { return res.data }).catch(err => { return err })
  }
  updateProduct = async ({ id, body }: { id: string, body: NewProduct }) => {
    const data = await GetTokenCookies()
    if (data.message === NO_TOKEN) {
      return Promise.reject(new Error(NO_TOKEN))
    }
    return axios.put<NewProduct, AxiosResponse>(`${baseUrl}/${id}`, body, {
      headers: {
        Authorization: `Bearer ${data.data.accessToken}`
      }
    })
  }
}
const productServices = new ProductServices
export default productServices