import {useEffect, useState} from "react";
import {Product} from "../model/Product";
import axios from "axios";

function useProduct(id: string | undefined) {
    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        if (id) {
            getProductById(id)
        }

    }, [id])

    function getProductById(id: string) {
        axios.get("/api/products/" + id)
            .then(response => response.data)
            .then(data => {
                setProduct(data)
            })
            .catch(console.error)
    }

    return {product}
}

export default useProduct;
