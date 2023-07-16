import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        search: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;