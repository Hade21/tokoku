import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { UserForm } from "@/types"

const NAME_REGEX = /^[a-zA-Z]{3,20}$/
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const PHONE_REGEX = /^[0-9]{10,13}$/

const initialState: UserForm = {
    firstName: "",
    lastName: "",
    validFirstName: false,
    validLastName: false,
    email: "",
    validEmail: false,
    address: "",
    phone: "",
    validPhone: false,
    password: "",
    validPassword: false,
    passwordMatch: '',
    validPassMatch: false,
    errMessage: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserForm>) {
            return action.payload
        },
        setFirstName(state, action: PayloadAction<string>) {
            return { ...state, firstName: action.payload }
        },
        setLastName(state, action: PayloadAction<string>) {
            return { ...state, lastName: action.payload }
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
        validateFirstName(state, action: PayloadAction<string>) {
            const res = NAME_REGEX.test(action.payload)
            return { ...state, validFirstName: res }
        },
        validateLastName(state, action: PayloadAction<string>) {
            const res = NAME_REGEX.test(action.payload)
            return { ...state, validLastName: res }
        },
        validateEmail(state, action: PayloadAction<string>) {
            const res = EMAIL_REGEX.test(action.payload)
            return { ...state, validEmail: res }
        },
        validatePhone(state, action: PayloadAction<string>) {
            const res = PHONE_REGEX.test(action.payload)
            return { ...state, validPhone: res }
        },
        validatePassword(state, action: PayloadAction<string>) {
            const res = PASS_REGEX.test(action.payload)
            return { ...state, validPassword: res }
        },
        setPasswordMatch(state, action: PayloadAction<string>) {
            return { ...state, passwordMatch: action.payload }
        },
        validatePassMatch(state, action: PayloadAction<string>) {
            const res = state.password === action.payload
            return { ...state, validPassMatch: res }
        },
        setErrMsg(state, action: PayloadAction<string>) {
            return { ...state, errMessage: action.payload }
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
    validateFirstName,
    validateLastName,
    validateEmail,
    validatePhone,
    validatePassword,
    setPasswordMatch,
    validatePassMatch,
    setErrMsg
} = userSlice.actions

export default userSlice.reducer