import React from "react";

import './app.css'
import { Route, Routes } from "react-router";

import HomePage from '../pages/homePage'
import CardPage from '../pages/cardPage'
import ShopHeader from "../shop-header/shop-header";

const App = () => {

    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <Routes>
                <Route path="/" exact Component={HomePage} />
                <Route path="/card" Component={CardPage} />
            </Routes>
        </main>
    )
}

export default App;