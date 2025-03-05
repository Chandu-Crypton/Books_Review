import React, { useEffect, useState } from 'react';
import axios from '../api';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('');

//   useEffect(() => {
//     axios.get('/books')
//       .then(res => setBooks(res.data))
//       .catch(err => console.error(err));
//   }, []);


useEffect(() => {
    axios.get(`/books?page=1&limit=10`)
        .then(res => {
            setBooks(res.data.books);
        })
        .catch(err => console.error(err));
}, []);


  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (genreFilter ? book.genre === genreFilter : true)
  );

  const genres = [...new Set(books.map(book => book.genre))];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Book Listing</h1>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2"
        />
        <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)} className="border p-2">
          <option value="">All Genres</option>
          {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredBooks.map(book => (
          <Link to={`/books/${book._id}`} key={book._id} className="p-4 border rounded hover:shadow">
            <h2 className="text-xl">{book.title}</h2>
            <p>{book.author}</p>
            <p className="text-sm">Genre: {book.genre}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;
