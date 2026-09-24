
'use client'

import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/book.types';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({book} : {book: IBook}) => {

    const {wishlist, setWishlist} = useContext(BooksContext);

    const handleWishList = () => {
        console.log("Wishlist button tigger", book);
        setWishlist([...wishlist, book])
        toast.success(`You have Wishlisted Book "${book.bookName}"`);
    }

    return <button className="btn bg-[#59C6D2] hover:bg-[#43b0bc] text-white border-none normal-case px-7 text-base font-semibold rounded-lg" onClick={() => handleWishList()}>
        Wishlist
    </button>
};

export default WishListButton;