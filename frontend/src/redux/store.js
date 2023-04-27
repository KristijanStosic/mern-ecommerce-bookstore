import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './categories/categorySlice'
import publisherReducer from './publishers/publisherSlice'
import genreReducer from './genres/genreSlice'
import productReducer from './products/productSlice'
import userReducer from './users/userSlice'
import authReducer from './auth/authSlice'
import modalReducer from './modal/modalSlice'
//import cartReducer from './cart/cartSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    categories: categoryReducer,
    publishers: publisherReducer,
    genres: genreReducer,
    users: userReducer,
    modal: modalReducer
  },
})
