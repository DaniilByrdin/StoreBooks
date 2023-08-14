import React, { Component } from "react";
import { connect } from "react-redux";

import './book-list.css'

import BookListItem from "../book-list-item";
import Spiner from '../spiner/spiner'
import ErrorEndicator from '../error-indicator/error-endicator'
import { WithBooksStoreService } from '../hoc/with-book-store-service'
import compose  from '../../utils/compose';


import { fetchBooks } from '../../actions/action'




class BookList extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render () {
        const { books, error, loading } = this.props

        if (loading) {
            return <Spiner />
        }

        if (error) {
            return <ErrorEndicator />
        }

        return (
        <ul className="book-list">
            {
                books.map( (book) => {
                    return (
                        <li key={book.id}><BookListItem book={book} /></li>
                    )
                } )
            }
        </ul> )
    }
}

const MapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    }
}

const MapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps // Props родительского компонента
    return {
        fetchBooks: fetchBooks( bookstoreService, dispatch )
    }
}

export default compose(
    WithBooksStoreService(),
    connect( MapStateToProps, MapDispatchToProps )
)(BookList)
