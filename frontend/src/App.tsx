import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import WelcomeScreen from "./ShopGallery/components/WelcomeScreen/WelcomeScreen";
import ProductApp from "./ShopGallery/components/ProductApp";
import ProductDetail from "./ShopGallery/components/ProductDetail/ProductDetail";
import CheckOut from "./ShopGallery/components/CheckOut/CheckOut";
import {Product} from "./ShopGallery/model/Product";
import axios from "axios";
import {CardProduct} from "./ShopGallery/model/CardProduct";


function App() {
    const [cardProducts, setCardProducts] = useState<CardProduct[]>([])

    function addProductToCard(product: Product) {
        if (cardProducts.map(cardProduct => cardProduct.product.id).includes(product.id)) {
            setCardProducts(prevState => {
                return prevState.map(cardProduct => {
                    if (cardProduct.product.id === product.id) {
                        cardProduct.count++;

                    }
                    return cardProduct
                })
            })
        } else {
            setCardProducts(prevState => [...prevState, {product: product, count: 1}])
        }

    }

    function minusProductInCard(product: Product) {
        if (cardProducts.map(cardProduct => cardProduct.product.id).includes(product.id)) {
            setCardProducts(prevState => {
                return prevState.map(cardProduct => {
                    if (cardProduct.product.id === product.id) {
                        cardProduct.count--;

                    }
                    return cardProduct
                })
            })
        } else {
            setCardProducts(prevState => [...prevState, {product: product, count: 1}])
        }

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

    function handleDeleteChange(id: string) {
        setCardProducts(prevState => {
            return prevState.filter(product => {
                return product.product.id !== id
            })
        })
    }

    return (
        <div className="App">

            <BrowserRouter>

                <Routes>
                    <Route path={"/"} element={<WelcomeScreen/>}></Route>
                    <Route path={"/products"}
                           element={<ProductApp amountArticles={cardProducts.length} products={products}/>}/>
                    <Route path={"/checkout/"}
                           element={<CheckOut addProductToCard = {addProductToCard} minusProductInCard={minusProductInCard} handleDeleteChange={handleDeleteChange} products={cardProducts}
                                              amountArticles={cardProducts.length}/>}></Route>
                    <Route path={"/products/:id"}
                           element={<ProductDetail amountArticles={cardProducts.length}
                                                   handleCardProduct={addProductToCard}/>}></Route>
                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;
