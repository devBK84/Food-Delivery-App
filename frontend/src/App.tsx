import React from 'react';
import './App.css';

import WelcomeScreen from "./ShopGallery/components/WelcomeScreen";
import ProductApp from "./ShopGallery/components/ProductApp";


function App() {


    return (
        <div className="App">
            <header className="App-header">
            <ProductApp/>
            </header>
            <WelcomeScreen></WelcomeScreen>
        </div>
    );
}

export default App;
