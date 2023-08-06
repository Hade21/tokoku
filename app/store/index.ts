import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import searchReducer from './searchSlice';
import cartOptionReducer from './cartOptionSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        search: searchReducer,
        cartOption: cartOptionReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;