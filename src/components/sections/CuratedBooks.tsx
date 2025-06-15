
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BOOKS } from '@/data/constants';

const CuratedBooks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Curated books
          </h2>
          <p className="text-xl text-gray-600">
            Not sure where to start? Check the list of books that most helped our career changers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BOOKS.map((book) => (
            <Card key={book.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className={`aspect-[3/4] ${book.cover} rounded-lg mb-4 flex items-center justify-center`}>
                  <div className="text-center p-4">
                    <div className="text-2xl font-bold text-gray-800 mb-2">
                      {book.title.split(' ').slice(0, 2).join(' ')}
                    </div>
                    <div className="text-sm text-gray-600">
                      {book.author.split(',')[0]}
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {book.author}
                </p>
                <p className="font-semibold text-teal-600">
                  {book.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedBooks;
