import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

import { NewProduct } from '@/types'

const initialState: NewProduct = {
    brand: "",
    category: "",
    title: "",
    color: [],
    variant: [],
    description: "",
    price: 0,
    stocks: 0
}

const newProductSlice = createSlice({
    name: "newProduct",
    initialState,
    reducers: {
        setTitle(state, action: PayloadAction<string>) {
            return { ...state, title: action.payload }
        },
        setDescription(state, action: PayloadAction<string>) {
            return { ...state, description: action.payload }
        },
        setCategory(state, action: PayloadAction<string>) {
            return { ...state, category: action.payload }
        },
        setBrand(state, action: PayloadAction<string>) {
            return { ...state, brand: action.payload }
        },
        setPrice(state, action: PayloadAction<number>) {
            return { ...state, price: action.payload }
        },
        setStocks(state, action: PayloadAction<number>) {
            return { ...state, stocks: action.payload }
        },
        setColor(state, action: PayloadAction<string>) {
            const data = action.payload.split(',')
            return { ...state, color: data }
        },
        setVariant(state, action: PayloadAction<string>) {
            const data = action.payload.split(',')
            return { ...state, variant: data }
        },
        removeColor(state, action: PayloadAction<string>) {
            return { ...state, color: state.color.filter(color => color !== action.payload) }
        },
        removeVariant(state, action: PayloadAction<string>) {
            return { ...state, variant: state.variant.filter(variant => variant !== action.payload) }
        },
        reset(state) {
            return initialState
        }
    }
})

export const {
    setTitle,
    setDescription,
    setCategory,
    setBrand,
    setPrice,
    setStocks,
    removeColor,
    removeVariant,
    reset,
    setColor,
    setVariant
} = newProductSlice.actions
export default newProductSlice.reducer