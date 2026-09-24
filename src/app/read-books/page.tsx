'use client'

import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/book.types';
import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Label, LabelList, Tooltip, XAxis, YAxis } from 'recharts';

// Custom shape and label props interfaces
interface BarShapeProps {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    index?: number;
    isActive?: boolean;
}

interface CustomLabelProps {
    index?: number;
    value?: string | number;
    x?: number;
    y?: number;
}

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];

const TriangleBar = (props: BarShapeProps) => {
    const { x = 0, y = 0, width = 0, height = 0, index = 0 } = props;

    const color = colors[index % colors.length];
    const getPath = (x: number, y: number, width: number, height: number) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    return (
        <path
            strokeWidth={props.isActive ? 5 : 0}
            d={getPath(Number(x), Number(y), Number(width), Number(height))}
            stroke={color}
            fill={color}
            style={{
                transition: 'stroke-width 0.3s ease-out',
            }}
        />
    );
};

const CustomColorLabel = (props: CustomLabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];
    return <Label {...(props as React.ComponentProps<typeof Label>)} fill={fill} />;
};

const ReadBooks = () => {
    const { readBooks } = useContext(BooksContext);

    // #region Sample data
    const data = readBooks.map((book: IBook, index: number) => {
        return {
            name: book.bookName,
            uv: book.totalPages,
            pv: index + 1,
            amt: index + 1,
        };
    });
    // #endregion

    return (
        <div className='container mx-auto my-5 text-center'>
            {readBooks.length > 0 ? (
                <BarChart
                    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                    data={data}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid />
                    <Tooltip cursor={{ fillOpacity: 0.5 }} />
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />
                    <Bar dataKey="uv" shape={<TriangleBar />} activeBar>
                        <LabelList content={<CustomColorLabel />} position="top" />
                    </Bar>
                </BarChart>
            ) : (
                <p className='text-2xl font-bold text-center'>No read Books to display</p>
            )}
        </div>
    );
};

export default ReadBooks;