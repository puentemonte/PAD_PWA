import React, { useState } from 'react';
import axios from 'axios';
import Books from './components/Books';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  function getBooks() {
    axios.request({
      method: 'get',
      url: `https://www.googleapis.com/books/v1/volumes?q=${query}`
    }).then((response) => {
      setBooks(response.data.items);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <h2 className="title">Google Books</h2>
      <input id="input" className="form-control" placeholder='Busca un libro...' value={query} onChange={e => setQuery(e.target.value)}></input>
      <button className="btn search-btn" onClick={getBooks}>Buscar</button>
      <Books books={books} />
    </div>
  );
}

export default App;