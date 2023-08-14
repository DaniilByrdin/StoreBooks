
export class BookStoreService {

    data = [
        {
            id: 1,
            title: 'Poduction-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 45,
            coverImage: 'https://m.media-amazon.com/images/I/51oxXEG6TRL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
        },
        {
            id: 2,
            title: 'Release IT',
            author: 'Michael T.Nygard',
            price: 45,
            coverImage: 'https://m.media-amazon.com/images/I/81c+o9-DetL._AC_UY218_.jpg'
        }
    ]

    getBooks() {
        return new Promise( (res, rej) => {
            setTimeout( () => {
                if (Math.random() > 0.75) {
                    rej( new Error('Error Test') ) 
                }
                res( this.data )
            }, 1000 )
        } )
    }
}

// export default BookStoreService