

export class BookStoreService {

    getBooks() {
        return [
            {
                id: 1,
                title: 'Poduction-Ready Microservices',
                author: 'Susan J. Fowler',
                price: '45$',
                coverImage: 'https://m.media-amazon.com/images/I/51oxXEG6TRL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
            },
            {
                id: 2,
                title: 'Release IT',
                author: 'Michael T.Nygard',
                price: '45$',
                coverImage: 'https://m.media-amazon.com/images/I/81c+o9-DetL._AC_UY218_.jpg'
            }
        ]
    }
}

// export default BookStoreService