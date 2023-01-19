import React from "react";
import "../../../App.css"
import "../ProductCard/ProductCard.css";

import NavBar from "../NavBar/NavBar";
import {Product} from "../../model/Product";

type ProductCardProps = {
    product: Product
}

export default function ProductCard( props: ProductCardProps) {
    // TODO: Bei Abschluß entfernen
console.log(props.product)

    return (
        <div>
            <div className="Article-Milk-Products">
                <div className="bg-carousel"></div>
                <div className="container"/>
                    {props.product.name}
                </div>
                <img className="img" src={"http://localhost:8080/bild-" + props.product.shortname.toLowerCase() +".png"} alt={props.product.shortname}/>
                <NavBar></NavBar>;
            </div>
    );
}