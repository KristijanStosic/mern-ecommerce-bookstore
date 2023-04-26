import axios from 'axios'
//import { store } from '../store'
import { extractErrorMessage } from '../../utils/utils'
import {
  getPublishers,
  createPublisher,
  publisherUpdate,
  publisherDelete,
  setLoading,
  setError,
  resetError,
} from '../publishers/publisherSlice'

// const instance = axios.create()

// instance.interceptors.request.use(function (config) {
//     const token = store.getState().auth.user.token 
//     if (token) {
//         instance.defaults.headers.common['Authorization'] = token 
//     } else {
//         instance.defaults.headers.common['Authorization'] = null 
//         /*if setting null does not remove `Authorization` header then try     
//            delete axios.defaults.headers.common['Authorization'];
//          */
//     }

//     return config
// })

export const getAllPublishers = () => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await axios.get(`/api/publishers`)
    dispatch(getPublishers(data))
  } catch (error) {
    dispatch(setError(extractErrorMessage(error)))
  }
}

export const createNewPublisher = (name) => async (dispatch, getState) => {
    const { auth: { user } } = getState()

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`
        }
    }

    try {
        const { data } = await axios.post(`/api/publishers`, name, config)
        dispatch(createPublisher(data))
        dispatch(resetError())
    } catch (error) {
        dispatch(setError(extractErrorMessage(error)))
    }
}

export const updatePublisher = (publisherId, name) => async (dispatch, getState) => {
    const { auth: { user } } = getState()

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`
        }
    }

    try {
      const { data } = await axios.put(`/api/publishers/${publisherId}`, { name }, config)
      dispatch(publisherUpdate(data))
      dispatch(resetError())
    } catch (error) {
        dispatch(setError(extractErrorMessage(error)))
    }
}

export const deletePublisher = (publisherId) => async (dispatch, getState) => {
    const { auth: { user } } = getState()

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`
        }
    }

    try {
      const { data } = await axios.delete(`/api/publishers/${publisherId}`, config)
      dispatch(publisherDelete(data))
    } catch (error) {
      dispatch(setError(extractErrorMessage(error)))
    }
}

export const resetPublisherError = () => async (dispatch) => {
  dispatch(resetError())
}