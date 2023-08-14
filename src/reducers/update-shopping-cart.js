const updateShoppingCart = (state, action) => {

    if( state === undefined ) {
        return {
            cartItems: [],
            orderTotal: 0,
            totalItems: 0,
        }
    }

    switch(action.type) {
        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.bookList.books.find( (book) => book.id === bookId );
            const itemIndex = state.shoppingCart.cartItems.findIndex(({id}) => id === bookId )
            const item = state.shoppingCart.cartItems[itemIndex];
            console.log(item);

            const newItem = updateCartItem( book, item )

            return {
                ...state,
                totalItems: state.shoppingCart.totalItems + 1,
                orderTotal: state.shoppingCart.orderTotal + newItem.price,
                cartItems: updateCartItems(state.shoppingCart.cartItems, newItem, itemIndex)
            }
            break;

        case 'BOOK_DELETE_TO_CART':
            const itemIndexDelete = state.shoppingCart.cartItems.findIndex( ({id}) => id === action.payload )
            const newArr = [...state.shoppingCart.cartItems.slice(0, itemIndexDelete),
            ...state.shoppingCart.cartItems.slice(itemIndexDelete + 1)]
            const order = state.shoppingCart.cartItems[itemIndexDelete].total
            const countItems = state.shoppingCart.cartItems[itemIndexDelete].count


            return {
                ...state,
                totalItems: state.shoppingCart.totalItems - countItems,
                orderTotal: state.shoppingCart.orderTotal - order,
                cartItems: newArr
            }

            break;

        case 'BOOK_INCREASE_TO_CART':
            const idDCR = action.payload;
            const bookDCRIndex = state.shoppingCart.cartItems.findIndex( ({ id }) => id === idDCR )
            const bookChoose = state.bookList.books.find( ({id}) => idDCR === id  )

            const itemDCR = state.shoppingCart.cartItems[bookDCRIndex];

            const newItemDCR = {
                ...itemDCR,
                count: itemDCR.count + 1,
                total: itemDCR.total + bookChoose.price,
            }

            return {
                ...state,
                orderTotal: state.shoppingCart.orderTotal + newItemDCR.price,
                totalItems: state.shoppingCart.totalItems + 1,
                cartItems: [ 
                    ...state.shoppingCart.cartItems.slice( 0, bookDCRIndex ),
                    newItemDCR,
                    ...state.shoppingCart.cartItems.slice( bookDCRIndex + 1 )
                ]
            }

            break;

        case 'BOOK_DECREASE_TO_CART':

            const idDEC = action.payload;
            const bookDECIndex = state.shoppingCart.cartItems.findIndex( ({ id }) => id === idDEC )
            const bookChooseDEC = state.bookList.books.find( ({id}) => idDEC === id  )

            const itemDEC = state.shoppingCart.cartItems[bookDECIndex];

            const newItemDEC = updateCartItemDecrease( bookChooseDEC, itemDEC)

            return {
                ...state,
                totalItems: state.shoppingCart.totalItems - 1,
                orderTotal: state.shoppingCart.orderTotal - newItemDEC.price,
                cartItems: updateCartItemsDecrease( bookDECIndex, newItemDEC, state.shoppingCart.cartItems )
            }
            
            break;    
            
        default: 
            return state.shoppingCart;
    }
}




const updateCartItems = ( cartItems, item, idx ) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}

const updateCartItem = ( {price, title, id}, item) => {
    const {count, total} = item

    if (item) {
        return {
            ...item,
            count: count + 1,
            total: total + price,
            price,
        }
    } else {
        return {
            id,
            title,
            count: 1,
            total: price,
            price,
        }
    }
}

const updateCartItemDecrease = ( {price} , item) => {
        const {count, total} = item

        return {
            ...item,
            count: count - 1,
            total: total - price,
        }
    
}

const updateCartItemsDecrease = ( bookDECIndex, newItemDEC, state ) => {
    const { count } = newItemDEC

    if(count < 1) {
        return [ 
            ...state.slice( 0, bookDECIndex ),
            ...state.slice( bookDECIndex + 1 )
        ]
    }

    return [ 
            ...state.slice( 0, bookDECIndex ),
            newItemDEC,
            ...state.slice( bookDECIndex + 1 )
        ]
}



export default updateShoppingCart



