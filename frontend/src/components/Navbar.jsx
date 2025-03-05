import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="p-4 bg-gray-200 flex gap-4">
    <Link to="/" className="font-bold">Home</Link>
    <Link to="/books">Books</Link>
    <Link to="/profile">Profile</Link>
  </nav>
);

export default Navbar;
