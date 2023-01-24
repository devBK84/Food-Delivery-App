import {Product} from "../model/Product";

import ProductGallery from "./ProductGallery/ProductGallery";
import React from "react";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";

type productAppProps = {
    products: Product[],
    amountArticles:number
}
export default function ProductApp(props: productAppProps) {


    return (
        <div>
           <div>
               <Header/>
           </div>
            <ProductGallery products={props.products}/>
            <NavBar amountArticles={props.amountArticles}/>
        </div>
    )
}