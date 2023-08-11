import React from "react";

import { BookStoreServiceConsimer } from "../component-context";

export const WithBooksStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookStoreServiceConsimer>
                {
                    (BookStoreService) => {
                        return (
                            <Wrapped {...props}
                                        BookStoreService = { BookStoreService } />
                        )
                    }
                }
            </BookStoreServiceConsimer>
        )
    }
}

