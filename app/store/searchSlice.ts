import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { Search } from "@/types"

const initialState: Search = {
    value: "",
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            return { ...state, value: action.payload }
        }
    }
})

export const { setSearch } = searchSlice.actions
export default searchSlice.reducer