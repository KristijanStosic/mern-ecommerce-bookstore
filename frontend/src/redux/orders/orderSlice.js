import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

export const initialState = {
  loading: false,
  error: null,
  orders: [],
  order: null,
  myOrders: [],
  orderSuccessUpdate: false
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
    getMyOrders: (state, action) => {
      state.myOrders = action.payload
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
      state.orders = state.orders.map((order) =>
        order._id === action.payload._id ? action.payload : order
      )
      state.loading = false
      state.error = null
      toast.success('Order paid')
    },
    deliverOrder: (state, action) => {
      state.orders = state.orders.map((order) => order._id === action.payload._id ? action.payload : order)
      state.loading = false
      state.error = null
      state.orderSuccessUpdate = true
      toast.success('Order delivered')
    },
    orderDelete: (state, action) => {
      state.orders = state.orders.filter((order) => order._id !== action.payload._id)
      state.error = null
      state.loading = false
      toast.success(`Order is deleted`)
    },
    resetMyOrders: (state) => {
      state.myOrders = []
      state.error = null
      state.loading = false
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
  getMyOrders,
  createOrder,
  deliverOrder,
  updateOrderToPaid,
  orderDelete,
  setError,
  resetError,
  resetMyOrders
} = ordersSlice.actions

export default ordersSlice.reducer

export const ordersSelector = (state) => state.orders
