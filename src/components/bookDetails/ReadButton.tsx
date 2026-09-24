
'use client'

import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/book.types';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book} : {book: IBook}) => {

    const {readBooks, setReadBook} = useContext(BooksContext);

    const handleReadBook = () => {
        console.log("read button tigger", book);
        setReadBook([...readBooks, book])
        toast.success(`You have read "${book.bookName}"`);
    }

    return <button className="btn btn-outline border-gray-300 normal-case px-7 text-base font-semibold rounded-lg hover:bg-gray-100 hover:text-black" onClick={() => handleReadBook()}>
        Read
    </button>
};

export default ReadButton;