import {configureStore} from '@reduxjs/toolkit';

import useReducer from './useSlice';
import useUserName from './useUserName';

export default configureStore({
  reducer: {
    listValue: useReducer,
    stringValue: useUserName,
  },
});
