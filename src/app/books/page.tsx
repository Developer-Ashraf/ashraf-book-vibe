import React from 'react';
import { DiVim } from 'react-icons/di';

import { IBook } from '@/types/book.types';
import BookCard from '@/components/shared/BookCard';

const getBooks = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        return res.json();
    }catch(error){
        console.error("Error fetching books data:", error);
        return []
    }
   
}

const Books = async () => {

    const bookData = await getBooks();
    console.log(bookData);

    return (

        <section className='py-[60px]'>
            <div className='container mx-auto text-center space-y-2'>
                <p className='font-semibold'>Our Collection</p>
                <h2 className='text-4xl font-bold'>Explore All Books</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi praesentium est corrupti provident obcaecati, fuga deleniti exercitationem autem non.</p>
            </div>
            <div className="container mx-auto py-10 grid grid-cols-3 gap-4">
                {
                    bookData.map((book:IBook, ind:number) => <BookCard key={ind} book={book}></BookCard>)
                }
            </div>
        </section>
    );
};

export default Books;