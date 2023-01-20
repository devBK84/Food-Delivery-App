import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import WelcomeScreen from "./ShopGallery/components/WelcomeScreen/WelcomeScreen";
import ProductApp from "./ShopGallery/components/ProductApp";
import ProductDetail from "./ShopGallery/components/ProductDetail/ProductDetail";


function App() {


    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<WelcomeScreen/>}></Route>
                    <Route path={"/products"} element={<ProductApp/>}></Route>
                    <Route path={"/products/:id"} element={<ProductDetail/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
