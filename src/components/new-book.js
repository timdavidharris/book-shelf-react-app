import React, { useState } from 'react';
import BookCard from './book-card';
import uniqid from 'uniqid';
import SupabaseComponent from '../supabaseClient';

// For Reference:
// https://medium.com/nerd-for-tech/how-to-build-forms-with-multiple-input-fields-using-react-hooks-677da2b851aa

export default function NewBook() {
    const [book, setBook] = useState({title: "", author: "", pages: "", bookRead: "read", id: uniqid()});
    const [formDisplay, setFormDisplay] = useState(false);
    const [library, setLibrary] = useState([dune, nineteen84]);

    dune = () => {
        let book = {
            title: 'Dune',
            author: 'Frank Herbert',
            pages: '658',
            bookRead: 'read',
            id: uniqid(),
        }
        return book;
    }

    nineteen84 = () => {
        let book = {
            title: '1984',
            author: 'George Orwell',
            pages: '298',
            bookRead: 'read',
            id: uniqid(),
        }
        return book;
    }

    handleChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value})
    }

    bookObj = () => {
        let book = {
                title: this.state.bookTitle,
                author: this.state.bookAuthor,
                pages: this.state.bookPages,
                bookRead: this.state.isBookRead,
                id: this.state.id,
            }
        return book;
    }

    removeBook = (book) => {
        let updatedArray = library.filter(item => item.id !== book.id)
        setLibrary(updatedArray);
        updateLocalStorage(updatedArray);
    }

    toggleFormDisplay = () => {
        formDisplay === true ? setFormDisplay(false) : setFormDisplay(true);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        return toggleFormDisplay();
    }

    updateLibraryArray = (book) => {
        let update = book;
        let bookIndex = library.findIndex(book => book.id === update.id);
        library.splice(bookIndex, 1, update);
        setLibrary(library)
        updateLocalStorage(library);
    }

    updateLocalStorage = (libraryArray) => {
        localStorage.setItem('libraryArray', JSON.stringify(libraryArray));
    }

    render(
        <div className='form-and-card-div'>
        <SupabaseComponent library={library}/>
            <div className='book-parent-div'>
                {library === undefined ? null : library.map((book) => {
                    return <BookCard key={book.id} book={book} removeBook={removeBook} updateLibraryArray={updateLibraryArray}/>;
                })}
            </div>
            <button className='toggle-btn' onClick={this.toggleFormDisplay}>
                Add A Book
            </button>
            {this.state.displayForm === false ? null : 
            <div className='modal'>
            <span className='close-btn' onClick={this.toggleFormDisplay}>&times;</span>
            <form className='modal-content add-a-book-form' onSubmit={this.handleSubmit}>
                <label>
                    This book is:
                    <br />
                    <select 
                        name="bookRead"
                        value={bookRead}
                        onChange={handleChange}
                        required
                    >
                    <option value="">--select one--</option>
                    <option value={"read"}>read</option>
                    <option value={"unread"}>unread</option>
                    </select>
                </label>
                <br />
                <label>
                    Book Title
                <input 
                    name="title"
                    type="text"
                    value={title}
                    onChange={handleChange}
                    required
                />
                </label>
                <label>
                    Author
                <input
                    name="author"
                    type="text"
                    value={author}
                    onChange={handleChange}
                    required
                />
                </label>
                <label>
                    Number of Pages
                <input
                    name="pages"
                    type="number"
                    value={pages}
                    onChange={handleChange}
                    required
                />
                </label>
                <button type='submit'>
                    ADD
                </button>
            </form>
            </div>
            }
        </div>
    )
}
