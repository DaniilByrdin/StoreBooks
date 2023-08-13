import React from "react";

import './app.css'
import { Route, Routes } from "react-router";

import { HomePage, CardPage } from '../pages/index'

const App = ( ) => {

    return (
        <Routes>
            <Route path="/" exact Component={HomePage} />
            <Route path="/card" Component={CardPage} />
        </Routes>
    )
}

export default  App;