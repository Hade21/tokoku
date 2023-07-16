export interface User {
    _id: string,
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    phone: string,
    password: string,
    validFirstname: boolean,
    validLastname: boolean,
    validPassword: boolean,
    validEmail: boolean,
    validPhone: boolean,
    passwordMatch: boolean,
    errMessage: string,
}

export interface Search {
    value: string
}