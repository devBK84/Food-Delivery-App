import {Product} from "./Product";

export type Order = {
    id: string,
    payment: string,
    products: Product[],
    ordertBy: string
}