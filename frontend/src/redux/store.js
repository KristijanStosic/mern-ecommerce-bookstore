import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/productSlice'
import categoryReducer from './categories/categorySlice'
import publisherReducer from './publishers/publisherSlice'
import authReducer from './auth/authSlice'
import modalReducer from './modal/modalSlice'
//import cartReducer from './cart/cartSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    categories: categoryReducer,
    publishers: publisherReducer,
    modal: modalReducer
  },
})
