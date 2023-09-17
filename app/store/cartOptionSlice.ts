import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ProductOption } from '@/types';

const initialState: ProductOption = {
    variant: '',
    count: 1,
    color: '',
}

const cartOptionSlice = createSlice({
    name: 'cartOption',
    initialState,
    reducers: {
        setVariant(state, action: PayloadAction<string>) {
            return { ...state, variant: action.payload }
        },
        setCount(state, action: PayloadAction<number>) {
            return { ...state, count: action.payload }
        },
        setColor(state, action: PayloadAction<string>) {
            return { ...state, color: action.payload }
        }
    }
})

export const { setVariant, setColor, setCount } = cartOptionSlice.actions
export default cartOptionSlice.reducer
