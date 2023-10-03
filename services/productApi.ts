import { DataProductDetail, DataProducts, ProductAPIParams } from '@/types'
import axios, { AxiosResponse } from 'axios'

const baseUrl = 'https://tokoku-server.fly.dev/api/v1/product'

class ProductServices {
  getProducts = async (params: ProductAPIParams) => {
    return axios.get<ProductAPIParams, AxiosResponse<DataProducts>>(baseUrl, { params }).then(res => { return res.data }).catch(err => { return err })
  }
  getDetailProduct = async (id: string) => {
    return axios.get<string, AxiosResponse<DataProductDetail>>(`${baseUrl}/${id}`).then(res => { return res.data }).catch(err => { return err })
  }
}

export default new ProductServices