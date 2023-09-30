import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types';

const NAME_REGEX = /^[a-zA-Z]{3,20}$/
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const PHONE_REGEX = /^[0-9]{10,13}$/

const initialState: Omit<User, '_id' | 'address'> = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    passwordMatch: '',
    validEmail: false,
    validFirstname: false,
    validLastname: false,
    validPassword: false,
    validPhone: false,
    validMatch: false,
    errMessage: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, action: PayloadAction<string>) => {
            return state = { ...state, firstName: action.payload }
        },
        setLastName: (state, action: PayloadAction<string>) => {
            return state = { ...state, lastName: action.payload }
        },
        setEmail: (state, action: PayloadAction<string>) => {
            return state = { ...state, email: action.payload }
        },
        setPassword: (state, action: PayloadAction<string>) => {
            return state = { ...state, password: action.payload }
        },
        setPhone: (state, action: PayloadAction<string>) => {
            return state = { ...state, phone: action.payload }
        },
        setPasswordMatch: (state, action: PayloadAction<string>) => {
            return state = { ...state, passwordMatch: action.payload }
        },
        setValidEmail: (state, action: PayloadAction<string>) => {
            return state = { ...state, validEmail: EMAIL_REGEX.test(action.payload) }
        },
        setValidFirstname: (state, action: PayloadAction<string>) => {
            return state = { ...state, validFirstname: NAME_REGEX.test(action.payload) }
        },
        setValidLastname: (state, action: PayloadAction<string>) => {
            return state = { ...state, validLastname: NAME_REGEX.test(action.payload) }
        },
        setValidPassword: (state, action: PayloadAction<string>) => {
            return state = { ...state, validPassword: PASS_REGEX.test(action.payload) }
        },
        setValidPhone: (state, action: PayloadAction<string>) => {
            return state = { ...state, validPhone: PHONE_REGEX.test(action.payload) }
        },
        setValidMatch: (state, action: PayloadAction<string>) => {
            return state = { ...state, validMatch: action.payload === state.password }
        },
        setErrMessage: (state, action: PayloadAction<string>) => {
            return state = { ...state, errMessage: action.payload }
        },
    }
})

export const { setFirstName, setLastName, setEmail, setPassword, setPhone, setPasswordMatch, setValidEmail, setValidFirstname, setValidLastname, setValidPassword, setValidPhone, setValidMatch, setErrMessage } = userSlice.actions

export default userSlice.reducer