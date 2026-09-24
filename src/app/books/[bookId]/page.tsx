import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishListButton';
import { IBook } from '@/types/book.types';
import Image from 'next/image';
import React from 'react';

interface IBookDetailPageProps {
    params: Promise<{
        id: string;
    }>
}

const getBooks = async () => {
    const res = await fetch('http://localhost:3000/booksData.json');
    return res.json();
}

const bookDetails = async ({ params }: IBookDetailPageProps) => {
    const { bookId } = await params;
    const bookData = await getBooks();
    const book = bookData.find((book: IBook) => book.bookId === Number(bookId)) as IBook;
    //   const book = bookData.find((book: IBook) => String(book.bookId) === String(id)) as IBook;

    return (
        <div className="max-w-6xl mx-auto my-10 p-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image Wrapper */}
            <div className="bg-base-200 rounded-3xl p-12 flex justify-center items-center h-full min-h-[500px]">
                <div className="relative w-full h-[420px]">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Right Column: Book Info */}
            <div className="flex flex-col gap-4 text-base-content">
                <h1 className="text-4xl font-bold font-serif">{book.bookName}</h1>
                <p className="text-gray-600 font-medium">By : {book.author}</p>

                <div className="border-t border-b border-gray-200 py-3">
                    <span className="text-gray-600 font-medium">{book.category}</span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                    <span className="font-bold text-black">Review : </span>
                    {book.review}
                </p>

                {/* Tags */}
                <div className="flex items-center gap-3 py-2 border-b border-gray-200">
                    <span className="font-bold text-black">Tag</span>
                    <div className="flex gap-2">
                        {book.tags?.map((tag, index) => (
                            <span 
                                key={index} 
                                className="bg-emerald-50 text-emerald-500 font-semibold px-4 py-1.5 rounded-full text-sm"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Book Details List */}
                <div className="grid grid-cols-2 gap-y-3 max-w-sm py-2">
                    <span className="text-gray-500">Number of Pages:</span>
                    <span className="font-bold text-black">{book.totalPages}</span>

                    <span className="text-gray-500">Publisher:</span>
                    <span className="font-bold text-black">{book.publisher}</span>

                    <span className="text-gray-500">Year of Publishing:</span>
                    <span className="font-bold text-black">{book.yearOfPublishing}</span>

                    <span className="text-gray-500">Rating:</span>
                    <span className="font-bold text-black">{book.rating}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-4">
                    <ReadButton book={book} />
                    <WishListButton book={book} />
                </div>
            </div>
        </div>
    );
};

export default bookDetails;