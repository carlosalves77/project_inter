import {createSlice} from '@reduxjs/toolkit';

type State = {
  isModalFeedBackOpen: boolean;
};

const initialState: State = {
  isModalFeedBackOpen: false,
};

const slice = createSlice({
  name: 'modalAvaliation',
  initialState,
  reducers: {
    openModal: state => {
      state.isModalFeedBackOpen = true;
    },
    closeModal: state => {
      state.isModalFeedBackOpen = false;
    },
  },
});

export const {openModal, closeModal} = slice.actions;

export const selectIsModalOpen = (state: {modal: State}) =>
  state.modal.isModalFeedBackOpen;

export default slice.reducer;
