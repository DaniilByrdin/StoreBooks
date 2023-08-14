import React from "react";
import { connect } from "react-redux";

import './shopping-cart-table.css'

import { onDeleteToCart, onIncreaseToCart, onDecreaseToCart } from '../../actions/action' 

const ShoppingCartTable = ({ items, orderTotal, onIncrease, onDecrease, onDelete }) => {

    const renderRow = (item, idx) => {

    // console.log(item);
    const { id, title, count, total } = item
    return (
        <tr key={id}>
            <td>{idx + 1}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td>{total}</td>
            <td>
                <button
                    onClick={() => onDelete(id)}
                    className="btn btn-outline-danger ">
                    <i className="fa fa-trash-o" />Delete
                </button>
                <button
                    onClick={() => onIncrease(id)}
                    className="btn btn-outline-success ">
                    <i className="fa fa-plus-circle" />Increase
                </button>
                <button
                    onClick={() => onDecrease(id)}
                    className="btn btn-outline-warning">
                    <i className="fa fa-minus-circle" />Decrease
                </button>
            </td>
        </tr>
    )
}

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead />
                <tbody>
                    { items.map( renderRow )}
                </tbody>
            </table>
            <div className="total">
                Total:${orderTotal}
            </div>
        </div>
    )
}

const MapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        orderTotal: orderTotal
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        onDecrease: (id) => dispatch( onDecreaseToCart(id) ),
        onIncrease: (id) => dispatch( onIncreaseToCart(id) ),
        onDelete: (id) => dispatch( onDeleteToCart(id) ),
    }
}

export default connect(MapStateToProps, MapDispatchToProps)( ShoppingCartTable )