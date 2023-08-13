const initialState = {
    books: [
        // {
        //     id: 1,
        //     title: 'Poduction-Ready Microservices',
        //     author: 'Susan J. Fowler'
        // },
        // {
        //     id: 2,
        //     title: 'Release IT',
        //     author: 'Michael T.Nygard'
        // }
    ],
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