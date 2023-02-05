export type User  = {
    name: string
    email: string
    phone: string
    address: Address
}

export type Address = {
    street: string
    city: string
    zipcode: string
}