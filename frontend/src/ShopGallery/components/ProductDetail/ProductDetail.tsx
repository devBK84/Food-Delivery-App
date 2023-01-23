import React from "react";
import "../../../App.css"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import "../ProductDetail/ProductDetail.css"
import {Product} from "../../model/Product";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

export default function ProductDetails() {

    const params = useParams()
    const [product, setProduct] = useState<Product>()

    const id: string | undefined = params.id
    console.log(id)
    // TODO: Anschließen löschen

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

    return (
        <div>
            <Header></Header>
            <div className={"detailsOverview"}>
                {!product && <p>loading files...</p>}
                {product &&

                    <div className={"productOverview"}>
                        <div className={"product-detail_container"}>
                            <img className="product-detail_img"
                                 src={"http://localhost:8080/bild-" + product.shortname.toLowerCase() + ".png"}
                                 alt="Weidemilk"/>
                        </div>
                        <div className={"Container"}>
                        </div>

                        <div className={"productDetailsContainer"}>
                            <h1> {product.name}</h1>
                            <hr/>
                            {product.name &&
                                <article className={"overviewArticle"}><h3>Description:</h3>{product.name}
                                </article>}
                            <NavBar></NavBar>
                        </div>

                    </div>

                }
            </div>

        </div>
    )
}




