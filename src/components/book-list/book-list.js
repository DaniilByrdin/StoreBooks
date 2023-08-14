import React, { Component } from "react";
import { connect } from "react-redux";

import './book-list.css'

import BookListItem from "../book-list-item";
import Spiner from '../spiner/spiner'
import ErrorEndicator from '../error-indicator/error-endicator'
import { WithBooksStoreService } from '../hoc/with-book-store-service'

import compose  from '../../utils/compose';
import { fetchBooks, onAddedToCart } from '../../actions/action'


const BookList = ( {books, onAddedToCart } ) => {
    return (
        <ul className="book-list">
            {
                books.map( (book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem book={book} 
                                        
                                        onAddedToCart={ () => onAddedToCart(book.id)}/>
                        </li>
                    )
                } )
            }
        </ul> 
    )
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render () {
        const { books, error, loading, onAddedToCart } = this.props

        if (loading) {
            return <Spiner />
        }
        if (error) {
            return <ErrorEndicator />
        }

        return ( <BookList books={ books } 
                            
                            onAddedToCart={onAddedToCart} /> )
    }
}

const MapStateToProps = (state) => {
    return {
        books: state.bookList.books,
        loading: state.bookList.loading,
        error: state.bookList.error
    }
}

const MapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps // Props родительского компонента
    return {
        fetchBooks: fetchBooks( bookstoreService, dispatch ),
        onAddedToCart: (id) => dispatch(onAddedToCart(id)),
    }
}

export default compose(
    WithBooksStoreService(),
    connect( MapStateToProps, MapDispatchToProps )
)(BookListContainer)
