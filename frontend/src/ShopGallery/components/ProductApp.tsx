import {useEffect, useState} from "react";
import {Product} from "../model/Product";
import axios from "axios";
import ProductGallery from "./ProductGallery/ProductGallery";

export default function ProductApp() {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        getProducts()
    }, [])

    function getProducts() {
        axios.get("/api/products").then((response) => {
            setProducts(response.data)
        }).catch(error => console.error(error))
    }

    return (
        <div>
            <ProductGallery products={products}/>
        </div>
    )
}