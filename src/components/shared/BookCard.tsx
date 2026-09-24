import { IBook } from '@/types/book.types';
import Image from 'next/image';
import Link from 'next/link';

interface IBookCardProps {
    book: IBook;
}

const BookCard = ({book}:IBookCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Book Image */}
      <div className="relative m-4 overflow-hidden rounded-xl bg-slate-100">
        {/* Category */}
        <span className="absolute left-3 top-3 z-10 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
          {book.category}
        </span>

        <Image
          src={book.image}
          alt={book.bookName}
          width={400}
          height={500}
          className="h-[280px] w-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Rating */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-semibold shadow-md">
          <span className="text-yellow-500">★</span>
          <span>{book.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5">

        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Name */}
        <h2 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-slate-500">
          By{" "}
          <span className="font-medium text-slate-700">
            {book.author}
          </span>
        </p>

        {/* Book Information */}
        <div className="my-4 grid grid-cols-2 gap-4 border-y border-slate-100 py-4">

          <div>
            <p className="text-xs text-slate-400">
              Publisher
            </p>
            <p className="mt-1 truncate text-sm font-medium text-slate-700">
              {book.publisher}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Published
            </p>
            <p className="mt-1 text-sm font-medium text-slate-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Pages
            </p>
            <p className="mt-1 text-sm font-medium text-slate-700">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Rating
            </p>
            <p className="mt-1 text-sm font-medium text-slate-700">
              {book.rating} / 5
            </p>
          </div>

        </div>

        {/* View Details */}
        <Link
          href={`/books/${book.bookId}`}
          className="block w-full rounded-xl border border-emerald-500 py-3 text-center font-semibold text-emerald-600 transition-all duration-300 hover:bg-emerald-500 hover:text-white"
        >
          View Details
        </Link>

      </div>
    </div>
    );
};

export default BookCard;