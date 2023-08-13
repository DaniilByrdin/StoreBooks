import React from "react";

import { BookStoreServiceConsimer } from "../component-context";

export const WithBooksStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookStoreServiceConsimer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped {...props}
                            bookstoreService = { bookstoreService } />
                        )
                    }
                }
            </BookStoreServiceConsimer>
        )
    }
}

