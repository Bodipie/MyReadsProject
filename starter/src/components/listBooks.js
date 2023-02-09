import React from 'react'
import { Link } from 'react-router-dom'
import Books from './Books';
import * as BooksAPI from '../utils/BooksAPI'

const listBooks = ({onGetBooks}) => {

    let currentlyReading = onGetBooks.filter((book) => book.shelf === 'currentlyReading' );
    let wantToRead = onGetBooks.filter((book) => book.shelf === 'wantToRead');
    let read = onGetBooks.filter((book) => book.shelf === 'read');

    return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <Books onGetData={currentlyReading} />
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <Books onGetData={wantToRead} />
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <Books onGetData={read} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='add_books'>Add a book</Link>
                </div>
            </div>
    )
}

export default listBooks