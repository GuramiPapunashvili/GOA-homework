import { useState, useEffect } from "react";
import './BookLibrary.css'

const BookLibrary = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [myLibrary, setMyLibrary] = useState([]);
  const [showLibrary, setShowLibrary] = useState(false);

  useEffect(() => {
    const fetchDefaultBooks = async () => {
      const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=programming&maxResults=10");
      const data = await res.json();
      setBooks(data.items || []);
    };
    fetchDefaultBooks();
  }, []);

  const handleSearch = async () => {
    if (!query) return;
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`);
    const data = await res.json();
    setBooks(data.items || []);
  };

  const addToLibrary = (book) => {
    if (!myLibrary.some((b) => b.id === book.id)) {
      setMyLibrary([...myLibrary, book]);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <button onClick={() => addToLibrary(book)}>Add to My Library</button>
          </div>
        ))}
      </div>

      <button onClick={() => setShowLibrary(!showLibrary)}>
        {showLibrary ? "Hide" : "Show"} My Library
      </button>

      {showLibrary && (
        <div>
          <h2>My Library</h2>
          {myLibrary.map((book, index) => (
            <div key={index}>
              <h3>{book.volumeInfo.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookLibrary;
