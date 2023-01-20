import React from "react";
import {Product} from "../../model/Product";
import ProductCard from "../ProductCard/ProductCard";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
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
            <Header></Header>
            <div className={"background"} style={{backgroundImage: `url(${background})`}}>
                {productsCards}
            </div>
            <NavBar></NavBar>
        </div>
    )
}