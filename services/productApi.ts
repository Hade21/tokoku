import { ProductAPIParams } from '@/types'
import axios from 'axios'

const baseUrl = 'https://tokoku-server.fly.dev/api/v1/product'

class ProductServices {
  getProducts(params: ProductAPIParams) {
    return axios.get(baseUrl, { params })
  }
  getDetailProduct(id: string) {
    return axios.get(`${baseUrl}/${id}`)
  }
}

export default new ProductServices