import React from "react";
import "../../../App.css"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import background from "../../../static/img/weidemilch@1x.png";
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
    }, [])

    function getProductById(id: string) {
        axios.get("/api/product/details/" + id)
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
                        <div className={"productPictureContainer"}>
                            <div className={"background"} style={{backgroundImage: `url(${background})`}}>
                            </div>
                            <div className={"productDetailsContainer"}>
                                <h1> {product.name}</h1>
                                <hr/>

                                {product.name &&
                                    <article className={"overviewArticle"}><h3>Beschreibung:</h3>{product.name}
                                    </article>}
                                <NavBar></NavBar>
                            </div>
                        </div>

                    </div>

                }
            </div>

        </div>
    )
}


/*Fresh whole milk in
sustainable reusable glass bottle, not homogenized, gently
heated and therefore durable for up to 7 days.*/



