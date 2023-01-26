import React from "react";
import "../ProductCard/ProductCard.css";
import {Product} from "../../model/Product";
import {useNavigate} from "react-router-dom";


type ProductCardProps = {
    product: Product
}

export default function ProductCard(props: ProductCardProps) {
    // TODO: Bei Abschluß entfernen
    console.log(props.product)

    const navigate = useNavigate()

    function handleDetailsClick() {
        navigate("/products/" + props.product.id)
    }


    return (

        <div className={"card-container"} onClick={handleDetailsClick}>
            <h5>{props.product.shortname}</h5>
            <img className="card-img"
                 src={"/bild-" + props.product.shortname.toLowerCase() + ".png"}
                 alt={props.product.shortname}/>
        </div>
    );
}