import React from "react";
import {Product} from "../model/Product";
import ProductCard from "./ProductCard";


type ShopGalleryProps = {
    products: Product[]

}

export default function ProductGallery(props: ShopGalleryProps){


    const productsCards = props.products.map(product =>{
        return (
            <ProductCard key={product.id}/>
        )
    })

    return(
        <div>
            {productsCards}
        </div>
    )
}