const initialState = {
    books: [],
}

const Reducer = ( state = initialState, action ) => {
    
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            }
            
            break;
        default: 
            return state
    }
}

export default Reducer