import axios from 'axios'
import { extractErrorMessage } from '../../utils/utils'

import {
  getOrders,
  getOrder,
  getMyOrders,
  //createOrder,
  addShippingAddress, 
  removeShippingAddress,
  deliverOrder,
  //updateOrderToPaid,
  orderDelete,
  setLoading,
  setError,
  resetError,
  resetMyOrders,
} from '../orders/orderSlice'

export const getAllOrders = () => async (dispatch, getState) => {
  dispatch(setLoading(true))

  const { auth: { user } } = getState()

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    }
  }

  try {
    const { data } = await axios.get('/api/orders', config)
    dispatch(getOrders(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}

export const getUserOrders = () => async (dispatch, getState) => {
  dispatch(setLoading(true))

  const { auth: { user } } = getState()

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    }
  }

  try {
    const { data } = await axios.get('/api/orders/my-orders', config)
    dispatch(getMyOrders(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}

export const getOrderById = (orderId) => async (dispatch, getState) => {
  dispatch(setLoading(true))

  const { auth: { user } } = getState()

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    }
  }

  try {
    const { data } = await axios.get(`/api/orders/${orderId}`, config)
    dispatch(getOrder(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}

export const deleteOrder = (orderId) => async (dispatch, getState) => {
  dispatch(setLoading(true))
  const { auth: { user } } = getState()

  const config = {
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`
      }
  }

  try {
    const { data } = await axios.delete(`/api/orders/${orderId}`, config)
    dispatch(orderDelete(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}

export const updateOrderToDelivered = (orderId) => async (dispatch, getState) => {
  const { auth: { user } } = getState()

  const config = {
      headers: {
          Authorization: `Bearer ${user.token}`
      }
  }

  try {
    const { data } = await axios.put(`/api/orders/${orderId}/deliver`, {}, config)
    dispatch(deliverOrder(data))
    dispatch(resetError())
  } catch (error) {
      dispatch(setError(extractErrorMessage(error)))
  }
}

export const setShippingAddress = (shippingAddressData) => (dispatch) => {
  dispatch(addShippingAddress(shippingAddressData))
  localStorage.setItem('shippingAddress', JSON.stringify(shippingAddressData))
}

export const clearShippingAddress = () => (dispatch) => {
  dispatch(removeShippingAddress())
}

export const resetUserOrders = () => async (dispatch) => {
  dispatch(resetMyOrders())
}

export const resetOrderError = () => async (dispatch) => {
  dispatch(resetError())
}