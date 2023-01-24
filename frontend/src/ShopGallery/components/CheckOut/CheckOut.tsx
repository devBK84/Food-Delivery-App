import React from "react";
import "../CheckOut/CheckOut.css"
import {Product} from "../../model/Product";

type Props = {products:Product[]}

export default function CheckOut(props:Props) {

    return (
        <div>
            {props.products.map((product) => (
                <div key={product.id} className="product-card">
                    <h3>{product.name}</h3>
                    <p>Price: {product.price}€</p>
                </div>

            ))}
        </div>
    );
}