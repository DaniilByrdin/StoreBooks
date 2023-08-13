import React, { Component } from "react";

import './book-list.css'

import BookListItem from "../book-list-item";
import { WithBooksStoreService } from '../hoc/with-book-store-service'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { booksLoaded } from '../../actions/action'
import compose  from '../../utils/compose';




class BookList extends Component {


    componentDidMount() {
        // 1
        const { bookstoreService } = this.props
        const data = bookstoreService.getBooks()

        console.log(data);
        // 2
        this.props.booksLoaded(data)
    }

    render () {
        const { books } = this.props

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
        books: state.books
    }
}

const MapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        booksLoaded
    }, dispatch)
}

export default compose(
    WithBooksStoreService(),
    connect( MapStateToProps, MapDispatchToProps )
)(BookList)
