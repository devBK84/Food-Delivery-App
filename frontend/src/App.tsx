import React from 'react';
import './App.css';

import Welcomescreen from "./ShopGallery/components/Welcomescreen";
import ProductApp from "./ShopGallery/components/ProductApp";


function App() {


    return (
        <div className="App">
            <header className="App-header">
            <ProductApp/>
            </header>
            <Welcomescreen></Welcomescreen>
        </div>
    );
}

export default App;
