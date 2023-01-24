import React from "react";
import {Product} from "../../model/Product";
import ProductCard from "../ProductCard/ProductCard";

import "../ProductGallery/ProductGallery.css";
import background from "../../../static/img/path-567@1x.png"


type ShopGalleryProps = {
    products: Product[]

}

export default function ProductGallery(props: ShopGalleryProps) {


    const productsCards = props.products.map(product => {
        return (
            <ProductCard key={product.id} product={product}/>
        )
    })

    return (
        <div>
            <div className={"background"} style={{backgroundImage: `url(${background})`}}>
                <div className={"product-gallery"}>
                    {productsCards}
                </div>
            </div>
        </div>
    )
}