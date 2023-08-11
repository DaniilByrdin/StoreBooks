import React from "react";

import { WithBooksStoreService } from '../hoc/with-book-store-service'

import './app.css'

const App = ( { BookStoreService } ) => {

    console.log( BookStoreService.getBooks() )

    return (
        <div> App </div>
    )
}

export default WithBooksStoreService()( App )