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

export type DataProduct = {
    message: string,
    items: Product[],
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
}