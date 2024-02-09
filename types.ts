export interface UserForm {
    firstName: string,
    firstNameFocus: boolean,
    validFirstName: boolean,
    lastName: string,
    lastNameFocus: boolean,
    validLastName: boolean,
    email: string,
    validEmail: boolean,
    emailFocus: boolean,
    address: string,
    phone: string,
    validPhone: boolean,
    phoneFocus: boolean,
    password: string,
    typeInputPass: "password" | "text",
    validPassword: boolean,
    passwordFocus: boolean,
    passwordMatch: string,
    typeInputPasMatch: "password" | "text",
    validPassMatch: boolean,
    passwordMatchFocus: boolean,
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
    stocks: number,
    category: string,
    brand: string,
    images: [{ url: string }],
    color: string[],
    ratings: [],
    createdAt: string,
    updatedAt: string,
    totalRating: number,
    variant: string[],
}

export type DataProducts = {
    message: string,
    items: Product[],
}

export type DataProductDetail = {
    message: string,
    item: Product
}

export interface CartBody {
    _id: string,
    count: number,
    variant: string
}

export interface SelectorProps {
    title: string,
    options: string[],
    value: string,
    setValue: (value: string) => void,
}

export interface CartOptionProps {
    _id: string,
    variantOption: string[],
    colorOption: string[],
    stocks: number,
}

export interface CardProductProps {
    img: [{ url: string }];
    name: string;
    price: number;
    id: string;
    variants: string[];
    colors: string[];
    stocks: number;
    rating: number
}

export interface ProductOption {
    variant: string,
    count: number,
    color: string,
}

export type UserData = {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string[],
    phone: string,
    role: 'admin' | 'user' | 'seller',
    cart: string[],
    wishlist: string[],
    createdAt: number
}

export type loginResponse = {
    message: string,
    data: {
        token: string,
        refreshToken: string,
        _id: string,
    }
}

export type registerResponse = {
    message: string,
    user: {
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        password: string,
        role: string,
        isBlocked: boolean,
        cart: [],
        address: [],
        wishlist: [],
        _id: string,
        createdAt: string,
        updatedAt: string,
        __v: number
    }
}

export type AddCartParams = {
    cart: {
        _id: string,
        variant: string,
        count: number,
        color: string
    }
}

export type NewProduct = Omit<Product, | "_id" | "slug" | "createdAt" | "updatedAt" | "totalRating" | "ratings" | "images">

export type CreateOrderBody = {
    COD: boolean,
    appliedCoupon: boolean
}
