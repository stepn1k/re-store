import React from "react";
import withBookStoreService from '../hoc/with-bookstore-service'

const App = ({bookStoreService}) => {
    console.log(bookStoreService.getBooks());
    return <div>App</div>;
};

export default withBookStoreService()(App);