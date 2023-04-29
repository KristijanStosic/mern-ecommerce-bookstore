import axios from 'axios'
import { extractErrorMessage } from '../../utils/utils'

import {
  getProducts,
  getProduct,
  createProduct,
  productUpdate,
  productDelete,
  setLoading,
  setError,
  resetError,
} from '../products/productSlice'

export const getAllProducts = (keyword = '', page = '', sort = '') => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await axios.get(`/api/products?keyword=${keyword}&page=${page}&sort=${sort}`)
    dispatch(getProducts(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}

export const getProductById = (productId) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await axios.get(`/api/products/${productId}`)
    dispatch(getProduct(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}

export const createNewProduct = (newProduct) => async (dispatch, getState) => {
  const { auth: { user } } = getState()

  const config = {
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`
      }
  }

  try {
      const { data } = await axios.post(`/api/products`, newProduct, config)
      dispatch(createProduct(data))
      dispatch(resetError())
  } catch (error) {
      dispatch(setError(extractErrorMessage(error)))
  }
}

export const updateProduct = (productId, productData) => async (dispatch, getState) => {
  const { auth: { user } } = getState()

  const config = {
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`
      }
  }

  try {
    const { data } = await axios.put(`/api/products/${productId}`, productData, config)
    dispatch(productUpdate(data))
    dispatch(resetError())
  } catch (error) {
      dispatch(setError(extractErrorMessage(error)))
  }
}

export const deleteProduct = (productId) => async (dispatch, getState) => {
  dispatch(setLoading(true))
  const { auth: { user } } = getState()

  const config = {
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`
      }
  }

  try {
    const { data } = await axios.delete(`/api/products/${productId}`, config)
    dispatch(productDelete(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}

export const resetProductError = () => async (dispatch) => {
  dispatch(resetError())
}
