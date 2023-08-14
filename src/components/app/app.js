import React from "react";

import { Route, Routes } from "react-router";
import { connect } from "react-redux";

import './app.css'

import HomePage from '../pages/homePage'
import CardPage from '../pages/cardPage'
import ShopHeader from "../shop-header/shop-header";

const App = ({orderTotal, totalItems}) => {

    return (
        <main role="main" className="container">
            <ShopHeader totalItems={totalItems} orderTotal={orderTotal} />
            <Routes>
                <Route path="/" exact Component={HomePage} />
                <Route path="/card" Component={CardPage} />
            </Routes>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        orderTotal: state.orderTotal,
        totalItems: state.totalItems
    }
}

export default connect( mapStateToProps, {} )(App);