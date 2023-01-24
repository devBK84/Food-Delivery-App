import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import WelcomeScreen from "./ShopGallery/components/WelcomeScreen/WelcomeScreen";
import ProductApp from "./ShopGallery/components/ProductApp";
import ProductDetail from "./ShopGallery/components/ProductDetail/ProductDetail";
import CheckOut from "./ShopGallery/components/CheckOut/CheckOut";
import {Product} from "./ShopGallery/model/Product";
import axios from "axios";


function App() {
    const [cardProducts, setCardProducts] = useState<Product[]>([])

    function addProductToCard(product: Product) {
        setCardProducts([
            ...cardProducts,
            product
        ])
    }

    const [products, setProducts] = useState<Product[]>([])
    const getProducts = useCallback(() => {
        axios.get("/api/products").then((response) => {
            setProducts(response.data)
        }).catch(error => console.error(error))
    }, [])


    useEffect(() => {
        getProducts()
    }, [getProducts])

    return (
        <div className="App">

            <BrowserRouter>

                <Routes>
                    <Route path={"/"} element={<WelcomeScreen/>}></Route>
                    <Route path={"/products"} element={<ProductApp amountArticles={cardProducts.length} products={products}/>}/>
                    <Route path={"/checkout/"} element={<CheckOut products={cardProducts}/>}></Route>
                    <Route path={"/products/:id"}
                           element={<ProductDetail amountArticles={cardProducts.length} handleCardProduct={addProductToCard}/>}></Route>
                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;
