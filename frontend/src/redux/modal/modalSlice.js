import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpenUpdateModal: false,
  isOpenDeleteModal: false,
  isOpenCreateModal: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openCreateModal: (state) => {
      state.isOpenCreateModal = true
    },
    closeCreateModal: (state) => {
      state.isOpenCreateModal = false
    },
    openUpdateModal: (state) => {
      state.isOpenUpdateModal = true
    },
    closeUpdateModal: (state) => {
      state.isOpenUpdateModal = false
    },
    openDeleteModal: (state) => {
      state.isOpenDeleteModal = true
    },
    closeDeleteModal: (state) => {
      state.isOpenDeleteModal = false
    }
  },
})

export const { openCreateModal, closeCreateModal, openUpdateModal, closeUpdateModal, openDeleteModal, closeDeleteModal } = modalSlice.actions

export default modalSlice.reducer

export const modalSelector = (state) => state.modal
