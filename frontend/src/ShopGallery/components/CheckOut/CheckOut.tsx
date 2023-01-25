import React from "react";
import "../CheckOut/CheckOut.css"
import {Product} from "../../model/Product";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";

type Props = {
    products: Product[]
    amountArticles: number
}

export default function CheckOut(props: Props) {

    return (
        <div>
            <Header title={"SHOPPING CARD"}/>
            <div className={"checkout-card_list"}>
                {props.products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>Price: {product.price}€</p>
                    </div>

                ))}
            </div>
            <NavBar amountArticles={props.amountArticles}/>
        </div>
    );
}