import React, { useState } from 'react';

export default function BookCard(props) {
    const [book, setBook] = useState(props.book);
    const [displayEditForm, setDisplayEditForm] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState("hide");
    const updateLibraryArray = props.updateLibraryArray;
    const removeBook = props.removeBook;

    const handleChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayEditForm(false);
        updateLibraryArray(book);
    }

    const updateReadStatus = () => {
        if (book.bookRead === "read") {
            book.bookRead = "unread";
            setBook(book => ({...book, bookRead: "unread"}))
        } else {
            book.bookRead = "read";
            setBook(book => ({...book, bookRead: "read"}))
        }
        updateLibraryArray(book);
    }

    const toggleEditFormDisplay = () => {
        displayEditForm === false ? setDisplayEditForm(true) : setDisplayEditForm(false);
    }

    const toggleConfirmDelete = () => {
        confirmDelete === "show" ? setConfirmDelete("hide") : setConfirmDelete("show");
    }

    return (
        <div className='book-child-div'>
            {`${book.title} by ${book.author} has ${book.pages} pages and is ${book.bookRead}`}
            <button onClick={updateReadStatus}>
                Change Read Status
            </button>
            <button onClick={toggleEditFormDisplay}>
                Edit Book
            </button>
            { confirmDelete === "hide" ? 
                <button onClick={toggleConfirmDelete}>
                DELETE BOOK
                </button>
                :
                <div className='modal'>
                    <span className='close-btn' onClick={toggleConfirmDelete}>&times;</span>
                    <div className='modal-content'>
                        <button onClick={() => removeBook(book)}>
                            YES, DELETE BOOK
                        </button>
                        <br />
                        <button onClick={toggleConfirmDelete}>
                            NO, do NOT delete Book
                        </button>
                    </div>
                </div>
                }
            {displayEditForm === false ? null :
                <div className='modal'>
                <span className='close-btn' onClick={toggleEditFormDisplay}>&times;</span>
                <form className='modal-content add-a-book-form' onSubmit={handleSubmit}>
                <label>
                    Book Title
                <input 
                    name="title"
                    type="text"
                    value={book.title}
                    onChange={handleChange}
                />
                </label>
                <label>
                    Author
                <input
                    name="author"
                    type="text"
                    value={book.author}
                    onChange={handleChange}
                />
                </label>
                <label>
                    Number of Pages
                <input
                    name="pages"
                    type="number"
                    value={book.pages}
                    onChange={handleChange}
                />
                </label>
                <br />
                <button type='submit'>
                    EDIT
                </button>
            </form>
            </div>
            }
        </div>
    )
}
