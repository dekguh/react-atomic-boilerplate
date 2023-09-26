/**
 * @see https://redux-toolkit.js.org/rtk-query/usage/code-splitting
 */
import { apiSlice } from '@/store/slice/apiSlice'

const productApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: '/auth/products',
        method: 'GET'
      })
    })
  })
})

export const { useGetProductsQuery } = productApi