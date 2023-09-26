import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { UserForm } from "@/types"

const NAME_REGEX = /^[a-zA-Z]{3,20}$/
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const PHONE_REGEX = /^[0-9]{10,13}$/

const initialState: UserForm = {
    firstName: "",
    validFirstName: false,
    firstNameFocus: false,
    lastName: "",
    validLastName: false,
    lastNameFocus: false,
    email: "",
    validEmail: false,
    emailFocus: false,
    address: "",
    phone: "",
    validPhone: false,
    phoneFocus: false,
    password: "",
    typeInputPass: "password",
    validPassword: false,
    passwordFocus: false,
    passwordMatch: '',
    typeInputPasMatch: "password",
    validPassMatch: false,
    passwordMatchFocus: false,
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
        },
        setFocusFirstName(state, action: PayloadAction<boolean>) {
            return { ...state, firstNameFocus: action.payload }
        },
        setFocusLastName(state, action: PayloadAction<boolean>) {
            return { ...state, lastNameFocus: action.payload }
        },
        setFocusEmail(state, action: PayloadAction<boolean>) {
            return { ...state, emailFocus: action.payload }
        },
        setFocusPhone(state, action: PayloadAction<boolean>) {
            return { ...state, phoneFocus: action.payload }
        },
        setFocusPassword(state, action: PayloadAction<boolean>) {
            return { ...state, passwordFocus: action.payload }
        },
        setFocusPasswordMatch(state, action: PayloadAction<boolean>) {
            return { ...state, passwordMatchFocus: action.payload }
        },
        toggleVisiblePassword(state) {
            return { ...state, typeInputPass: state.typeInputPass === "password" ? "text" : "password" }
        },
        toggleVisiblePasswordMatch(state) {
            return { ...state, typeInputPasMatch: state.typeInputPasMatch === "password" ? "text" : "password" }
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
    setErrMsg,
    setFocusEmail,
    setFocusFirstName,
    setFocusLastName,
    setFocusPassword,
    setFocusPasswordMatch,
    setFocusPhone,
    toggleVisiblePassword,
    toggleVisiblePasswordMatch,
} = userSlice.actions

export default userSlice.reducer