import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import searchReducer from './searchSlice';
import cartOptionReducer from './cartOptionSlice';
import userDataReducer from './userDataSlice'
import newProductReducer from './newProductSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        user: userReducer,
        search: searchReducer,
        cartOption: cartOptionReducer,
        userData: userDataReducer,
        newProduct: newProductReducer,
    },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;