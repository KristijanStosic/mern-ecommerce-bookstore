import axios from 'axios'
import { extractErrorMessage } from '../../utils/utils'

import {
  getReviews,
  //getReview,
  getProductReviews,
  //createReview,
  reviewDelete,
  setLoading,
  setError,
  resetError,
} from '../reviews/reviewSlice'

export const getAllReviews = () => async (dispatch) => {
  dispatch(setLoading(true))

  try {
    const { data } = await axios.get('/api/reviews')
    dispatch(getReviews(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}

export const getSingleProductReviews = (productId) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await axios.get(`/api/reviews/${productId}/reviews`)
    dispatch(getProductReviews(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}

export const deleteReview = (reviewId) => async (dispatch, getState) => {
  dispatch(setLoading(true))
  const { auth: { user } } = getState()
  
  const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
    }
  }
  
  try {
    const { data } = await axios.delete(`/api/reviews/${reviewId}`, config)
    dispatch(reviewDelete(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}
  

export const resetReviewError = () => async (dispatch) => {
    dispatch(resetError())
}
  