import React from "react";
import "../CheckOut/CheckOut.css"
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import {CardProduct} from "../../model/CardProduct";
import {Product} from "../../model/Product";

type Props = {
    products: CardProduct[]
    amountArticles: number
    handleDeleteChange(id: string): void
    addProductToCard(product: Product): void
    minusProductInCard(product: Product): void
}

export default function CheckOut(props: Props) {
    console.log(props.products)


    function handleCardPlusProduct(product: Product) {
        props.addProductToCard(product)
    }

    function handleCardMinusProduct(product: Product) {
        props.minusProductInCard(product)
    }

    function handleDeleteChange(id: string) {
        props.handleDeleteChange(id)
    }

    return (
        <div>
            <Header title={"SHOPPING CARD"}/>
            <div className={"checkout-card_list"}>
                {props.products.map((product) => (
                    <div key={product.product.id} className="product-card">
                        <h4>{product.product.name}</h4>
                        <p>Price: {product.product.price}€</p>
                        <button id={product.product.id} onClick={() => handleCardPlusProduct(product.product)}>+
                        </button>
                        <button className={"delete-button"}
                                onClick={() => handleDeleteChange(product.product.id)}>DELETE
                        </button>
                        <button onClick={() => handleCardMinusProduct(product.product)}>-</button>

                        <div className={"count1"}>{product.count}</div>
                    </div>


                ))}
            </div>
            <NavBar amountArticles={props.amountArticles}/>
        </div>
    );
}