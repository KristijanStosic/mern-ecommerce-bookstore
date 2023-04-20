import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/productSlice'
import categoryReducer from './categories/categorySlice'
import authReducer from './auth/authSlice'
//import cartReducer from './cart/cartSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    categories: categoryReducer
  },
})
