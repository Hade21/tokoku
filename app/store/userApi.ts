import { UserData } from '@/types'
import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface CustomError {
  data: { message: string },
  status: number | string
  error?: { TypeError: string }
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tokoku-server.fly.dev/api/v1/user',
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError>,
  endpoints: (builder) => ({
    login: builder.mutation<UserData, Pick<UserData, 'email' | 'password'>>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      })
    }),
    register: builder.mutation<UserData, Omit<UserData, '_id' | 'address'>>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      })
    })
  }),
})

export const { useLoginMutation, useRegisterMutation } = userApi