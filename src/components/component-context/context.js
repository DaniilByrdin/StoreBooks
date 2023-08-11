import React from "react";

const {
    Provider: BookStoreServiceProvider,
    Consumer: BookStoreServiceConsimer,
} = React.createContext()

export { BookStoreServiceProvider, BookStoreServiceConsimer }