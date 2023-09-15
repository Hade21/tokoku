import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import searchReducer from './searchSlice';
import cartOptionReducer from './cartOptionSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { productApi } from './productApi'
import { userApi } from './userApi';

export const store = configureStore({
    reducer: {
        user: userReducer,
        search: searchReducer,
        cartOption: cartOptionReducer,
        [productApi.reducerPath]: productApi.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware, userApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;