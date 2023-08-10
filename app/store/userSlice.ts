import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { User } from "@/types"

const NAME_REGEX = /^[a-zA-Z]{3,20}$/
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const PHONE_REGEX = /^[0-9]{10,13}$/

const initialState: User = {
    _id: "",
    firstname: "",
    lastname: "",
    validFirstname: false,
    validLastname: false,
    email: "",
    validEmail: false,
    address: "",
    phone: "",
    validPhone: false,
    password: "",
    validPassword: false,
    passwordMatch: false,
    errMessage: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            return action.payload
        },
        setFirstName(state, action: PayloadAction<string>) {
            return { ...state, firstname: action.payload }
        },
        setLastName(state, action: PayloadAction<string>) {
            return { ...state, lastname: action.payload }
        },
        setEmail(state, action: PayloadAction<string>) {
            return { ...state, email: action.payload }
        },
        setAddress(state, action: PayloadAction<string>) {
            return { ...state, address: action.payload }
        },
        setPhone(state, action: PayloadAction<string>) {
            return { ...state, phone: action.payload }
        },
        setPassword(state, action: PayloadAction<string>) {
            return { ...state, password: action.payload }
        },
        setValidFirstname(state, action: PayloadAction<string>) {
            const res = NAME_REGEX.test(action.payload)
            return { ...state, validFirstname: res }
        },
        setValidLastname(state, action: PayloadAction<string>) {
            const res = NAME_REGEX.test(action.payload)
            return { ...state, validLastname: res }
        },
        setValidEmail(state, action: PayloadAction<string>) {
            const res = EMAIL_REGEX.test(action.payload)
            return { ...state, validEmail: res }
        },
        setValidPhone(state, action: PayloadAction<string>) {
            const res = PHONE_REGEX.test(action.payload)
            return { ...state, validPhone: res }
        },
        setValidPassword(state, action: PayloadAction<string>) {
            const res = PASS_REGEX.test(action.payload)
            return { ...state, validPassword: res }
        },
        setPasswordMatch(state, action: PayloadAction<string>) {
            const res = state.password === action.payload
            return { ...state, passwordMatch: res }
        },
        clearUser() {
            return initialState
        }
    }
})

export const {
    setUser,
    setFirstName,
    setLastName,
    setEmail,
    setAddress,
    setPhone,
    setPassword,
    setValidFirstname,
    setValidLastname,
    setValidEmail,
    setValidPhone,
    setValidPassword,
    setPasswordMatch,
    clearUser
} = userSlice.actions

export default userSlice.reducer