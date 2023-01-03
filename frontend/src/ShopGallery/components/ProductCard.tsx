import React from "react";
import "../../App.css"
import {Product} from "../model/Product";

type ProductCardProps = {
    product: Product

}

export default function ProductCard(props: ProductCardProps) {
    return (
        <div>
            <h1>{props.product.name}</h1>
            <p>{props.product.price}</p>
            <p>{props.product.description}</p>
        </div>
    )
}