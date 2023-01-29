import React, {useEffect, useState} from "react";
import "../../../App.css"
import {useParams} from "react-router-dom";
import axios from "axios";
import "../ProductDetail/ProductDetail.css"
import {Product} from "../../model/Product";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";


type ProductDetailsProps = {
    handleCardProduct(product: Product | undefined): void,
    amountArticles: number
}

export default function ProductDetails(props: ProductDetailsProps) {

    const params = useParams()
    const [product, setProduct] = useState<Product>()

    const id: string | undefined = params.id

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

    function handleCardProduct() {
        props.handleCardProduct(product)
    }

    return (
        <div>
            <Header title={product ? product.shortname : "NO FOUND"}/>
            <div className={"detailsOverview"}>
                {!product && <p>loading files...</p>}
                {product &&

                    <div className={"productOverview"}>
                        <div className={"product-detail_container"}>
                            <img className="product-detail_img"
                                 src={"/bild-" + product.shortname.toLowerCase() + ".png"}
                                 alt="Weidemilk"/>
                            <p>Price: {product.price}€</p>
                            <button onClick={handleCardProduct}>Add to Basket</button>
                        </div>
                        <div className={"Container"}>
                        </div>

                        <div className={"productDetailsContainer"}>
                            <h2> {product.name}</h2>
                            <hr/>
                            {product.name &&
                                product.description &&
                                product.price &&
                                <article className={"overviewArticle"}><h3>Description:</h3>{product.name}
                                </article>}

                        </div>
                        <NavBar amountArticles={props.amountArticles}/>
                    </div>

                }
            </div>

        </div>
    )
}




