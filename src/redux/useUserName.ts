import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type State = {
  value: string | null;
};

const initialState: State = {
  value: null,
};

const slice = createSlice({
  name: 'stringValue',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    clearValue: state => {
      state.value = null;
    },
  },
});

export const {setValue, clearValue} = slice.actions;

export const selectValue = (state: {stringValue: State}) =>
  state.stringValue.value;

export default slice.reducer;
