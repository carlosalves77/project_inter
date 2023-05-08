import {createSlice} from '@reduxjs/toolkit';

type State = {
  isModalOpen: boolean;
};

const initialState: State = {
  isModalOpen: false,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: state => {
      state.isModalOpen = true;
    },
    closeModal: state => {
      state.isModalOpen = false;
    },
  },
});

export const {openModal, closeModal} = slice.actions;

export const selectIsModalOpen = (state: {modal: State}) =>
  state.modal.isModalOpen;

export default slice.reducer;
