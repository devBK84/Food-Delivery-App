import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import WelcomeScreen from "./ShopGallery/components/WelcomeScreen";
import ProductApp from "./ShopGallery/components/ProductApp";


function App() {



    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<WelcomeScreen/>}></Route>
                    <Route path={"/products"} element={<ProductApp/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
);
}

export default App;
