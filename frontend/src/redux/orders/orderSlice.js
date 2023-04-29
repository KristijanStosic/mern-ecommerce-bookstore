import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

export const initialState = {
  loading: false,
  error: null,
  orders: [],
  order: null,
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },
    getOrders: (state, action) => {
      state.orders = action.payload
      state.loading = false
      state.error = null
    },
    getOrder: (state, action) => {
      state.order = action.payload
      state.loading = false
      state.error = null
    },
    createOrder: (state, action) => {
        state.orders = [...state.orders, action.payload]
        //state.orders.push(action.payload)
        state.loading = false
        state.error = null
        toast.success(`Order created`)
    },
    updateOrderToPaid: (state, action) => {
      state.orders = state.orders.map((order) => order._id === action.payload._id ? action.payload : order)
      state.loading = false
      state.error = null
      toast.success('Order paid')
    },
    updateOrderToDelivered: (state, action) => {
        state.orders = state.orders.map((order) => order._id === action.payload._id ? action.payload : order)
        state.loading = false
        state.error = null
        toast.success('Order delivered')
    },
    orderDelete: (state, action) => {
        state.orders = state.orders.filter((order) => order._id !== action.payload._id)
        state.error = null
        state.loading = false
        toast.success(`Order is deleted`)
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    resetError: (state) => {
      state.error = null
      state.loading = false
    },
  },
})

export const {
  setLoading,
  getOrders,
  getOrder,
  createOrder,
  updateOrderToDelivered,
  updateOrderToPaid,
  orderDelete,
  setError,
  resetError,
} = ordersSlice.actions

export default ordersSlice.reducer

export const ordersSelector = (state) => state.orders