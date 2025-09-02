export interface SignUp{
    name:string,
    password: string,
    email: string
}

export interface LoginIn{
    email: string,
    password: string
}

export interface product{
    name: string,
    price: number,
    category: string,
    color:string,
    img: string,
    desc: string
}
