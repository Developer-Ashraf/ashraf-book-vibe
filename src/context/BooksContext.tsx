'use client'

import { IBook } from '@/types/book.types';
import React, { createContext, ReactNode, useState } from 'react';

interface IBookContext {
    readBooks: IBook[]
    setReadBook: React.Dispatch<React.SetStateAction<IBook[]>>
    wishlist: IBook[]
    setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>
}

export const BooksContext = createContext<IBookContext>({
    readBooks: [],
    setReadBook: () => {},
    wishlist: [],
    setWishlist: () => {},
});


const BooksContextProvider = ({children}: {children: ReactNode}) => {

    const [readBooks, setReadBook] = useState<IBook[]>([]);
    const [wishlist, setWishlist] = useState<IBook[]>([]);

    const sharedData = {
        readBooks, 
        setReadBook,
        wishlist, 
        setWishlist
    }


    return <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
};

export default BooksContextProvider;