import { ProductAPIParams } from '@/types'
import axios from 'axios'

const baseUrl = 'https://tokoku-server.fly.dev/api/v1/product'

class ProductServices {
  getProducts(params: ProductAPIParams) {
    return axios.get(baseUrl, { params })
  }
}

export default new ProductServices