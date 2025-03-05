import { useEffect } from 'react';
import axios from '../api';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const { books, setBooks } = useAppContext();

  useEffect(() => {
    axios.get('/books')
        .then(res => {
            console.log('Books API response:', res.data);
            setBooks(res.data.books); 
        })
        .catch(err => console.error(err));
}, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Featured Books</h1>
      <div className="grid grid-cols-3 gap-4">
        {books.map(book => (
          <div key={book._id} className="p-4 border rounded">
            <h2 className="text-xl">{book.title}</h2>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
