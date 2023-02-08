import "./App.css";
import { useEffect, useState } from "react";
import ListBooks from "./components/listBooks";
import Search from "./components/Search";
import { Route, Routes, useNavigate } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI'


function App() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    const getBooks = async () =>{
      setBooks(await BooksAPI.getAll())
    }
    getBooks()
  }, [])

  return (
    <Routes>
      <Route exact path='/' element={<ListBooks />} />
      <Route path='/add_books' element={<Search onGetBooks={books}/>} />
    </Routes>
  );
}

export default App;
