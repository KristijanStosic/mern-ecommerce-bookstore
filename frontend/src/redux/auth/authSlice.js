import { createSlice } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('user'))

export const initialState = {
  loading: false,
  error: null,
  user: user ? user : null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },
    userLogin: (state, action) => {
      state.user = action.payload
      state.error = null
      state.loading = false
    },
    userLogout: (state) => {
      state.loading = false
      state.error = null
      state.user = null
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    resetError: (state) => {
      state.error = null;
    },
  },
})

export const { setLoading, setError, userLogin, userLogout, resetError } = authSlice.actions
export default authSlice.reducer

export const authSelector = (state) => state.auth
