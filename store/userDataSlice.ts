import { UserData } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: UserData = {
  _id: "",
  address: [],
  cart: [],
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  role: 'user',
  wishlist: [],
  createdAt: Date.now(),
}

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setData(state, action) {
      return { ...state, ...action.payload }
    },
    resetData(state) {
      return initialState
    }
  }
})

export const { setData, resetData } = userDataSlice.actions
export default userDataSlice.reducer