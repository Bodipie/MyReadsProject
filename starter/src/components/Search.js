import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import Books from './Books';
import * as BooksAPI from '../utils/BooksAPI'

const Search = ({onGetBooks}) => {
    const [books, setBooks] = useState([])
    const [query, setQuery] = useState('')
    const updateQuery = (e) => {
        setQuery(e.target.value)
        console.log(books);
    }
    useEffect(() => {
        const searchResult = async() =>{
            setBooks(await BooksAPI.search(query))
        }
        if (query){
            searchResult()
        }
    },[query])
        
    // console.log(books);
    
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={(event) => updateQuery(event)}
                        value={query}
                    />
                </div>
            </div>
            <div className="search-books-results">
            {
                    <Books onGetData={books?.error || query === '' ? [] : books} />
            }
            </div>
        </div>
    )
}

export default Search