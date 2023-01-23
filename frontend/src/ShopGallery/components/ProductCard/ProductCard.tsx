import React from "react";
import "../../../App.css"
import "../ProductCard/ProductCard.css";
import {Product} from "../../model/Product";
import {useNavigate} from "react-router-dom";
import background from "../../../static/img/path-567@1x.png";


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

        <div className="Article-Milk-Products">
            <div className="card border-0 productCard" onClick={handleDetailsClick}>
                <div className="milk-container">
                    <img className="img"
                         src={"http://localhost:8080/bild-" + props.product.shortname.toLowerCase() + ".png"}
                         alt={props.product.shortname}/>
                </div>
                <div className="bg-carousel"></div>
                <div>
                </div>
            </div>

        </div>


    );
}