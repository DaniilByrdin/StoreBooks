import React from "react";
import { Link } from "react-router-dom";

import './book-list-item.css'

const BookListItem = ({ book }) => {

    const { author, title, price, coverImage } = book

    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover" />
            </div>
            <div className="book-details">
                <Link to="#" className="book-title"> {author} </Link>
                <div className="book-aithor"> {title} </div>
                <div className="book-price"> {price} </div>
                <button className="btn btn-info add-to-cart">Add to cart</button>
            </div>
        </div>
    )
} 

export default BookListItem