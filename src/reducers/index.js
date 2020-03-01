const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    cartTotalPrice: 450
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "FETCH_BOOKS_REQUEST":
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        case "FETCH_BOOKS_SUCCESS":
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case "FETCH_BOOKS_ERROR":
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case "BOOK_ADDED_TO_CART":
            let book = state.books.find((book) => book.id === action.payload);

            let newItem = {
                id: book.id,
                name: book.title,
                count: 1,
                price: book.cost,
            };

            return {
                ...state,
                cartItems: [...state.cartItems, newItem]
            };

        default :
            return state
    }
};

export default reducer