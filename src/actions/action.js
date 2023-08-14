

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks,
    }
}

const booksRquested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_ERROR',
        payload: error,
    }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRquested())
    bookstoreService.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch((err) => {
            console.log(err);
            dispatch(booksError(err))
        })
}

const onAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId,
    }
}

const onDeleteToCart = (bookId) => {
    return {
        type: 'BOOK_DELETE_TO_CART',
        payload: bookId
    }
}

const onIncreaseToCart = (bookId) => {
    return {
        type: 'BOOK_INCREASE_TO_CART',
        payload: bookId
    }
}

const onDecreaseToCart = (bookId) => {
    return {
        type: 'BOOK_DECREASE_TO_CART',
        payload: bookId
    }
}




export {
    fetchBooks,
    onAddedToCart,
    onDeleteToCart,
    onIncreaseToCart,
    onDecreaseToCart,
};