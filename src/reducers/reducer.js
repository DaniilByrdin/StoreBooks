
const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0,
    totalItems: 0,
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

const updateCartItem = (book, item) => {
    if (item) {
        return {
            ...item,
            count: item.count + 1,
            total: item.total + book.price,
            price: book.price,
        }
    } else {
        return {
            id: book.id,
            title: book.title,
            count: 1,
            total: book.price,
            price: book.price,
        }
    }
}

const updateCartItemDecrease = (book, item) => {
        return {
            ...item,
            count: item.count - 1,
            total: item.total - book.price,
        }
    
}

const updateCartItemsDecrease = ( bookDECIndex, newItemDEC, state ) => {
    if(newItemDEC.count < 1) {
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


const Reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
            break;

        case 'FETCH_BOOKS_REQUEST':
            return { ...state, books: [], loading: true, error: null }
            break;

        case 'FETCH_BOOKS_ERROR':
            return { 
                ...state, 
                books: [], 
                loading: false,
                error: action.payload, 
            }
            break;       

        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find( (book) => book.id === bookId );
            const itemIndex = state.cartItems.findIndex(({id}) => id === bookId )
            const item = state.cartItems[itemIndex];

            const newItem = updateCartItem( book, item )

            return {
                ...state,
                totalItems: state.totalItems + 1,
                orderTotal: state.orderTotal + newItem.price,
                cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
            }
            break;

        case 'BOOK_DELETE_TO_CART':
            const itemIndexDelete = state.cartItems.findIndex( ({id}) => id === action.payload )
            const newArr = [...state.cartItems.slice(0, itemIndexDelete),
            ...state.cartItems.slice(itemIndexDelete + 1)]
            const order = state.cartItems[itemIndexDelete].total
            const countItems = state.cartItems[itemIndexDelete].count


            return {
                ...state,
                totalItems: state.totalItems - countItems,
                orderTotal: state.orderTotal - order,
                cartItems: newArr
            }

            break;

        case 'BOOK_INCREASE_TO_CART':
            const idDCR = action.payload;
            const bookDCRIndex = state.cartItems.findIndex( ({ id }) => id === idDCR )
            const bookChoose = state.books.find( ({id}) => idDCR === id  )

            const itemDCR = state.cartItems[bookDCRIndex];

            const newItemDCR = {
                ...itemDCR,
                count: itemDCR.count + 1,
                total: itemDCR.total + bookChoose.price,
            }

            return {
                ...state,
                orderTotal: state.orderTotal + newItemDCR.price,
                totalItems: state.totalItems + 1,
                cartItems: [ 
                    ...state.cartItems.slice( 0, bookDCRIndex ),
                    newItemDCR,
                    ...state.cartItems.slice( bookDCRIndex + 1 )
                ]
            }

            break;

        case 'BOOK_DECREASE_TO_CART':
            const idDEC = action.payload;
            const bookDECIndex = state.cartItems.findIndex( ({ id }) => id === idDEC )
            const bookChooseDEC = state.books.find( ({id}) => idDEC === id  )

            const itemDEC = state.cartItems[bookDECIndex];

            const newItemDEC = updateCartItemDecrease( bookChooseDEC, itemDEC)

            return {
                ...state,
                totalItems: state.totalItems - 1,
                orderTotal: state.orderTotal - newItemDEC.price,
                cartItems: updateCartItemsDecrease( bookDECIndex, newItemDEC, state.cartItems )
            }
            
            break;            
        default: 
            return state
    }
}

export default Reducer