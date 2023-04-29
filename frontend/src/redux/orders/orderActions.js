import axios from 'axios'
import { extractErrorMessage } from '../../utils/utils'

import {
  getOrders,
  getOrder,
  //createOrder,
  //updateOrderToDelivered,
  //updateOrderToPaid,
  orderDelete,
  setLoading,
  setError,
  resetError,
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


export const resetOrderError = () => async (dispatch) => {
  dispatch(resetError())
}
