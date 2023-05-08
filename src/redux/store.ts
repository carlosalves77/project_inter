import {configureStore} from '@reduxjs/toolkit';

import useReducer from './useSlice';
import useUserName from './useUserName';
import useDonationSucess from './useDonationSucess';
import useAvaliationSucess from './useAvaliationSucess';

export default configureStore({
  reducer: {
    listValue: useReducer,
    stringValue: useUserName,
    modal: useDonationSucess,
    modalAvaliation: useAvaliationSucess,
  },
});
