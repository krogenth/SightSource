import { Option } from "./option";

export interface Tour {
    id: number
    countryId:number
    tour: string
    description: string
    price: number
    img: string
    options: Option[]
}