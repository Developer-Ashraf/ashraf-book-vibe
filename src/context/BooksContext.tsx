'use client'

import React, { createContext, ReactNode, useState } from 'react';


export const BooksContext = createContext({});


const BooksContextProvider = ({children}: {children: ReactNode}) => {

    const [readBooks, setReadBook] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const sharedData = {
        readBooks, 
        setReadBook,
        wishlist, 
        setWishlist
    }


    return <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
};

export default BooksContextProvider;