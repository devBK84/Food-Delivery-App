import React from "react";
import "../../../App.css"
import {useParams} from "react-router-dom";
import useProduct from "../../hooks/useProduct";


export default function ProductDetail() {

    const params = useParams()

    const id: string | undefined = params.id

    const {product} = useProduct(id)

    if (!product) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <div>
            <p>Milk</p>
            {!product && <p>Loading...</p>}
            {<div>
                <p>{product.name}</p>
                <p>{product.id}</p>
            </div>
            }
        </div>

    )
}