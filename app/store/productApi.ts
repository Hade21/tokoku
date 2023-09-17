import { DataProduct, ProductAPIParams } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tokoku-server.fly.dev/api/v1',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getProducts: builder.query<DataProduct, ProductAPIParams>({
      query: (params) => ({
        url: '/product',
        method: "GET",
        params,
      }),
    })
  })
})

export const { useGetProductsQuery } = productApi