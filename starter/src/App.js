import "./App.css";
import { useState } from "react";
import ListBooks from "./components/listBooks";
import Search from "./components/Search";
import { Route, Routes, useNavigate } from 'react-router-dom';


function App() {

  return (
    <Routes>
      <Route exact path='/' element={<ListBooks />} />
      <Route path='/add_books' element={<Search />} />
    </Routes>
  );
}

export default App;
