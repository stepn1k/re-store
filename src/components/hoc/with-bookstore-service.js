import React from "react";
import {BookStoreConsumer} from "../book-store-service-context";

const withBookStoreService = () => Wrapper => {
    return props => (
        <BookStoreConsumer>
            {bookStoreService => {
                return <Wrapper {...props} bookStoreService={bookStoreService}/>;
            }}
        </BookStoreConsumer>
    );
};

export default withBookStoreService;
