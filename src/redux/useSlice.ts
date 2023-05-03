import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type State = {
  value: Array<object>;
};

const initialState: State = {
  value: [],
};

const slice = createSlice({
  name: 'listValue',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<object>) => {
      state.value.push(action.payload);
    },
    decrement: (state, action: PayloadAction<object>) => {
      const index = state.value.findIndex(
        //@ts-ignore
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const {increment, decrement} = slice.actions;

export const selectValue = (state: {counter: State}) => state.counter.value;

export default slice.reducer;
