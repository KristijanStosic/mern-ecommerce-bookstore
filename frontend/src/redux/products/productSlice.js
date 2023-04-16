import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  error: null,
  products: [],
  product: null,
  page: null,
  pages: null,
  reviewSend: false,
  productUpdate: false,
  reviewRemoval: false,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },
    setProducts: (state, action) => {
      state.loading = false
      state.error = null
      state.products = action.payload.products
      state.page = action.payload.page
      state.pages = action.payload.pages
    },
    setProduct: (state, action) => {
      state.product = action.payload
      state.loading = false
      state.error = null
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    productReviewed: (state) => {
      state.loading = false
      state.error = null
      state.reviewSend = true
    },
    resetError: (state) => {
      state.error = null
      state.reviewSend = false
      state.productUpdate = false
      state.reviewRemoval = false
    },
    setProductUpdateFlag: (state) => {
      state.productUpdate = true
      state.loading = false
    },
    setReviewRemovalFlag: (state) => {
      state.error = null
      state.reviewRemoval = true
      state.loading = false
    },
  },
})

export const {
  setLoading,
  setError,
  setProducts,
  setProduct,
  productReviewed,
  resetError,
  setProductUpdateFlag,
  setReviewRemovalFlag,
} = productsSlice.actions
export default productsSlice.reducer

export const productsSelector = (state) => state.products