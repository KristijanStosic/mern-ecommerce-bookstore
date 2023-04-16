import axios from 'axios'
import { extractErrorMessage } from '../../utils/utils'

import {
  setProducts,
  setLoading,
  setError,
  setProduct,
  //productReviewed,
  resetError,
} from '../products/productSlice'

export const getProducts = (keyword = '', page = '', sort = '') => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await axios.get(`/api/products?keyword=${keyword}&page=${page}&sort=${sort}`)
    dispatch(setProducts(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}

export const getProduct = (productId) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await axios.get(`/api/products/${productId}`)
    dispatch(setProduct(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}

export const resetProductError = () => async (dispatch) => {
  dispatch(resetError())
}
