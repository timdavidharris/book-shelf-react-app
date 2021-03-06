import React, { useState } from 'react';
import BookForm from './BookForm';

export default function BookCard(props) {
    const [book, setBook] = useState(props.book);
    const [confirmDelete, setConfirmDelete] = useState("hide");
    const [formDisplay, setFormDisplay] = useState(false);
    const addBookComponent = false;
    const updateLibrary = props.updateLibrary;
    const removeBook = props.removeBook;

    const toggleFormDisplay = () => {
        if (formDisplay === false) {
            setFormDisplay(true);
        } else {
            setFormDisplay(false);
        }
    }

    const handleChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value});
    }

    const removeBookAndHide = () => {
        removeBook(book);
        setConfirmDelete("hide");
    }

    const renderDeleteBtns = () => {
        if (confirmDelete === "show") {
            return (
                <div className='modal'>
                    <span className='close-btn' onClick={() => setConfirmDelete("hide")}>&times;</span>
                    <div className='modal-content'>
                        <button className='delete-btn' onClick={() => removeBookAndHide()}>
                            YES, DELETE BOOK
                        </button>
                        <br />
                        <button onClick={() => setConfirmDelete("hide")}>
                            NO, do NOT delete Book
                        </button>
                    </div>
                </div>
            )
        }
    }

    const renderForm = () => {
        return (<BookForm handleChange={handleChange} handleSubmit={handleSubmit} book={book} addBookComponent={addBookComponent} toggleFormDisplay={toggleFormDisplay}/>)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleFormDisplay();
        updateLibrary(book);
    }

    const updateReadStatus = () => {
        if (book.bookRead === "read") {
            book.bookRead = "unread";
            setBook(book => ({...book, bookRead: "unread"}))
        } else {
            book.bookRead = "read";
            setBook(book => ({...book, bookRead: "read"}))
        }
        updateLibrary(book);
    }

    return (
        <div className='book-child-div'>
            {`${book.title} by ${book.author} has ${book.pages} pages and is ${book.bookRead}`}
            <button onClick={updateReadStatus}>
                Change Read Status
            </button>
            <button onClick={() => setFormDisplay(true)}>
                Edit Book
            </button>
            <button className='delete-btn' onClick={() => setConfirmDelete("show")}>
                DELETE BOOK
            </button>
            { renderDeleteBtns() }
            <div>
                { formDisplay === false ? null : renderForm() }
            </div>
        </div>
    )
}
