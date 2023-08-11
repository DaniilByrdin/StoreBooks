import React from "react";
import  ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/app/app'
import ErrorBountry from './components/error-boundry/error-bountry'
import BookStoreService from './srvices/bookStore'
import { BookStoreServiceProvider } from './components/component-context/context'

import Store from "./store";

const bookstoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={Store}>
        <ErrorBountry>
            <BookStoreServiceProvider value = {bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookStoreServiceProvider>
        </ErrorBountry>
    </Provider>,
    document.getElementById('root')
)