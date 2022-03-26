import React, { useState } from 'react';

export default function BookCard(props) {
    const [book, setBook] = useState(props.book);
    const [displayEditForm, setDisplayEditForm] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState("hide");
    const updateLibrary = props.updateLibrary;
    const removeBook = props.removeBook;

    const handleChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayEditForm(false);
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
            <button onClick={() => setDisplayEditForm(true)}>
                Edit Book
            </button>
            { confirmDelete === "hide" ? 
                <button onClick={() => setConfirmDelete("show")}>
                DELETE BOOK
                </button>
                :
                <div className='modal'>
                    <span className='close-btn' onClick={() => setConfirmDelete("hide")}>&times;</span>
                    <div className='modal-content'>
                        <button onClick={() => removeBook(book)}>
                            YES, DELETE BOOK
                        </button>
                        <br />
                        <button onClick={() => setConfirmDelete("hide")}>
                            NO, do NOT delete Book
                        </button>
                    </div>
                </div>
                }
            {displayEditForm === false ? null :
                <div className='modal'>
                <span className='close-btn' onClick={() => setDisplayEditForm(false)}>&times;</span>
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
