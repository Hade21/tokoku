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
    },
    changeEmail(state, action) {
      return { ...state, email: action.payload }
    },
    changePhone(state, action) {
      return { ...state, phone: action.payload }
    },
    changeFirstName(state, action) {
      return { ...state, firstName: action.payload }
    },
    changeLastName(state, action) {
      return { ...state, lastName: action.payload }
    },
  }
})

export const { setData, resetData, changeEmail, changeFirstName, changeLastName, changePhone } = userDataSlice.actions
export default userDataSlice.reducer