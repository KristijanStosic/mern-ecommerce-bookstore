import axios from 'axios'
import {
  setLoading,
  setError,
  userLogin,
  userLogout,
  resetError
} from '../auth/authSlice'
import { extractErrorMessage } from '../../utils/utils'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const login = (userData) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await axios.post('/api/auth/login', userData, config)
    dispatch(userLogin(data))
    localStorage.setItem('user', JSON.stringify(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('user')
  localStorage.removeItem('subtotal')
  localStorage.removeItem('cart')
  dispatch(userLogout())
}

export const register = (userData) => async (dispatch) => {
  setLoading(true)
  try {
    const { data } = await axios.post('/api/auth/register', userData, config)
    dispatch(userLogin(data))
    localStorage.setItem('user', JSON.stringify(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}

export const resetErrorState = () => async (dispatch) => {
  dispatch(resetError())
}