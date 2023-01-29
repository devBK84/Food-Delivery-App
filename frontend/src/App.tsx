import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import WelcomeScreen from "./ShopGallery/components/WelcomeScreen/WelcomeScreen";
import ProductApp from "./ShopGallery/components/ProductApp";
import ProductDetail from "./ShopGallery/components/ProductDetail/ProductDetail";
import {Product} from "./ShopGallery/model/Product";
import axios from "axios";
import {CardProduct} from "./ShopGallery/model/CardProduct";
import ShoppingCard from "./ShopGallery/components/ShoppingCard/ShoppingCard";
import CheckOut from "./ShopGallery/components/CheckOut/CheckOut";


function App() {
    const [cardProducts, setCardProducts] = useState<CardProduct[]>([])
    const [totalPrice, setTotalPrice] = useState(0)

    function addProductToCard(product: Product) {
        console.log(product.id)
        console.log(cardProducts)

        if (cardProducts.map(cardProduct => cardProduct.product.id).includes(product.id)) {
            setCardProducts(prevState => {
                return prevState.map(cardProduct => {
                    if (cardProduct.product.id === product.id) {
                        setTotalPrice(prevState => (prevState + cardProduct.product.price))
                        cardProduct.count++;

                    }
                    return cardProduct
                })
            })
        } else {
            setCardProducts(prevState => [...prevState, {product: product, count: 1}])
            setTotalPrice(prevState => (prevState + product.price))
        }

    }

    const minusProductInCard = (product: Product) => {
        if (cardProducts.map(cardProduct => cardProduct.product.id).includes(product.id)) {
            setCardProducts(prevState => {
                return prevState.map(cardProduct => {
                    if (cardProduct.count > 0) {
                        setTotalPrice(prevState => (prevState - cardProduct.product.price))
                        cardProduct.count--;

                    }
                    return cardProduct
                })
            })
        } else {
            setTotalPrice(prevState => (prevState - product.price))
            setCardProducts(prevState => [...prevState, {product: product, count: 0}])
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
        console.log(totalPrice)
        setCardProducts(prevState => {
            return prevState.filter(product => {
                if (product.product.id === id) {
                    setTotalPrice(prevState => prevState - (product.count * product.product.price))
                }
                return product.product.id !== id
            })
        })
    }


    return (
        <div className="App">

            <BrowserRouter>

                <Routes>
                    <Route path={"/"} element={<WelcomeScreen/>}></Route>
                    <Route path={"/products"} element={<ProductApp amountArticles={cardProducts.length} products={products}/>}/>
                    <Route path={"/shopping-card/"}
                           element={<ShoppingCard addProductToCard={addProductToCard}
                                                  totalPrice={totalPrice}
                                                  minusProductInCard={minusProductInCard}
                                                  handleDeleteChange={handleDeleteChange} products={cardProducts}
                                                  amountArticles={cardProducts.length}/>}></Route>
                    <Route path={"/products/:id"}
                           element={<ProductDetail amountArticles={cardProducts.length}
                                                   handleCardProduct={addProductToCard}/>}></Route>
                    <Route path={"/checkout/"} element={<CheckOut amountArticles={cardProducts.length}/>}/>
                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;
