

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

export {
    fetchBooks
};