import { Tour } from "./tour";

export interface Country {
    id: number
    name: string
    description: string
    tours: Array<Tour>
    img: string
}