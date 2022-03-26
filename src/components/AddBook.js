import React, { useState } from 'react';
import Book from './Book';
import uniqid from 'uniqid';
import Library from './Library';

// For Reference:
// https://medium.com/nerd-for-tech/how-to-build-forms-with-multiple-input-fields-using-react-hooks-677da2b851aa

export default function NewBook() {
    const dune = {
        title: 'Dune',
        author: 'Frank Herbert',
        pages: '658',
        bookRead: 'read',
        id: uniqid(),
    }

    const nineteen84 = {
        title: '1984',
        author: 'George Orwell',
        pages: '298',
        bookRead: 'read',
        id: uniqid(),
    }

    const [book, setBook] = useState({
        title: "", 
        author: "", 
        pages: "", 
        bookRead: "read", 
        id: uniqid()});
    const [formDisplay, setFormDisplay] = useState(false);
    const [library, setLibrary] = useState(localStorage.getItem("libraryArray") === null ? [dune, nineteen84] : JSON.parse(localStorage.getItem('libraryArray')));

    const handleChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value});
    }

    const removeBook = (book) => {
        let updatedArray = library.filter(item => item.id !== book.id)
        setLibrary(updatedArray);
        updateLocalStorage(updatedArray);
    }

    const toggleFormDisplay = () => {
        formDisplay === true ? setFormDisplay(false) : setFormDisplay(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLibrary(library.concat(book));
        return toggleFormDisplay();
    }

    const updateLibraryArray = (book) => {
        let update = book;
        let bookIndex = library.findIndex(book => book.id === update.id);
        library.splice(bookIndex, 1, update);
        setLibrary(library)
        updateLocalStorage(library);
    }

    const updateLocalStorage = (libraryArray) => {
        localStorage.setItem('libraryArray', JSON.stringify(libraryArray));
    }

    return(
        <div className='form-and-card-div'>
        <Library library={library}/>
            <div className='book-parent-div'>
                {library === undefined || library.length === 0 ? 
                <div className='book-child-div'>
                    <h3>Humm... no books? 
                    <br />
                    Click "Add A Book" to start your library!
                    <br />
                    👇
                    </h3>
                </div> : 
                library.map((book) => {
                    return <Book key={book.id} book={book} removeBook={removeBook} updateLibraryArray={updateLibraryArray}/>;
                })}
            </div>
            <button className='toggle-btn' onClick={toggleFormDisplay}>
                Add A Book
            </button>
            {formDisplay === false ? null : 
            <div className='modal'>
            <span className='close-btn' onClick={toggleFormDisplay}>&times;</span>
            <form className='modal-content add-a-book-form' onSubmit={handleSubmit}>
                <label>
                    This book is:
                    <br />
                    <select 
                        name="bookRead"
                        value={book.bookRead}
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
                    value={book.title}
                    onChange={handleChange}
                    required
                />
                </label>
                <label>
                    Author
                <input
                    name="author"
                    type="text"
                    value={book.author}
                    onChange={handleChange}
                    required
                />
                </label>
                <label>
                    Number of Pages
                <input
                    name="pages"
                    type="number"
                    value={book.pages}
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