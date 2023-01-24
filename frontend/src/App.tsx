import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import WelcomeScreen from "./ShopGallery/components/WelcomeScreen/WelcomeScreen";
import ProductApp from "./ShopGallery/components/ProductApp";
import ProductDetail from "./ShopGallery/components/ProductDetail/ProductDetail";
import CheckOut from "./ShopGallery/components/CheckOut/CheckOut";
import {Product} from "./ShopGallery/model/Product";
import NavBar from "./ShopGallery/components/NavBar/NavBar";


function App() {
    const [cardProducts, setCardProducts] = useState<Product[]>([])

    function addProductToCard(product: Product) {
        setCardProducts([
            ...cardProducts,
            product
        ])
    }

    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<WelcomeScreen/>}></Route>
                    <Route path={"/products"} element={<ProductApp/>}></Route>
                    <Route path={"/products/:id"}
                           element={<ProductDetail handleCardProduct={addProductToCard}/>}></Route>
                    <Route path={"/checkout/"} element={<CheckOut products={cardProducts}/>}></Route>
                </Routes>
                <NavBar amountArticles={cardProducts.length}></NavBar>
            </BrowserRouter>

        </div>
    );
}

export default App;
