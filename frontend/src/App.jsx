import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import BookList from './pages/BookList';
import UserProfile from './pages/UserProfile';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import ReviewForm from './components/ReviewForm';

const App = () => (
  <AppProvider>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/review" element={<ReviewForm />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

export default App;
