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

export interface SearchQuery {
    value: string
}

export interface ProductAPIParams {
    page?: number,
    limit?: number,
    sort?: string,
    brand?: string,
    'price[lte]'?: number,
    fields?: string,
}

export interface Product {
    _id: string,
    title: string,
    slug: string,
    description: string,
    price: number,
    stock: number,
    category: string,
    brand: string,
    images: [{ url: string }],
    colors: string,
    ratings: [],
    createdAt: string,
    updatedAt: string,
    totalRating: number,
}