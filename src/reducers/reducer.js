import updateBookList from './update-book-list'
import updateShoppingCart from './update-shopping-cart'

const Reducer = ( state, action ) => {
    return {
        bookList: updateBookList( state, action ),
        shoppingCart: updateShoppingCart( state, action ),
    }
}

export default Reducer