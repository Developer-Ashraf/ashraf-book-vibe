'use client'
import BookCard from '@/components/shared/BookCard';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/book.types';
import React, { useContext, useState } from 'react';

const ListedBooks = () => {

    const { readBooks, wishlist } = useContext(BooksContext)

    const [shotBy, setStotBy] = useState<"rating" | "pages" | "year">("rating");

    const shotBooks = (books: IBook[]) => {
        const shotedBooks = [...books];

        if(shotBy === "rating"){
            shotedBooks.sort((a, b) => b.rating - a.rating);
        }else if(shotBy === "year"){
            shotedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }else if(shotBy === "pages"){
            shotedBooks.sort((a, b) => b.totalPages - a.totalPages);
        }
        return shotedBooks;
    }

    const shotedReadBooks = shotBooks(readBooks)
    const shotedWiishlist = shotBooks(wishlist)

    console.log(readBooks, wishlist);
    return (
        <div className="container mx-auto py-10">
            <h2 className='my-4 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center'>Listed Books: {readBooks.length} Wishlised book: {readBooks.length}</h2>
            <div className='text-center'>
                <select 
                value={shotBy}
                onChange={(e) => setStotBy(e.target.value as "rating" | "pages" | "year")}
                defaultValue="Pick a Runtime" className="select select-success m-4">
                    <option disabled={true}>Short By</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"year"}>Published year</option>
                    <option value={"pages"}>Number of pages</option>
                </select>
            </div>


            {/* tabs */}
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`ReadList Books (${shotedReadBooks.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {shotedReadBooks.length > 0 ? shotedReadBooks.map((book: IBook) => {
                        return <BookCard key={book.bookId} book={book}></BookCard>
                    }) : <p>No read books found</p>}
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books(${shotedWiishlist.length})`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {shotedWiishlist.length > 0 ? shotedWiishlist.map((book: IBook) => {
                        return <BookCard key={book.bookId} book={book}></BookCard>
                    }) : <p>No wishlist books found</p>}
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;