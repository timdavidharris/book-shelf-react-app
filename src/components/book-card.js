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
        book.bookRead === "read" ? setBook(book, {bookRead: "unread"}) : setBook(book, {bookRead: "read"});
        updateLibraryArray(book);
    }

    return (
        <div className='book-child-div'>
            {`${title} by ${author} has ${pages} pages and is ${bookRead}`}
            <button onClick={updateReadStatus}>
                Change Read Status
            </button>
            <button onClick={toggleEditFormDisplay}>
                Edit Book
            </button>
            { confirmDelete === "hide" ? 
                <button onClick={setDeleteConfirm("show")}>
                DELETE BOOK
                </button>
                :
                <div className='modal'>
                    <span className='close-btn' onClick={setDeleteConfirm("hide")}>&times;</span>
                    <div className='modal-content'>
                        <button onClick={removeBook(book)}>
                            YES, DELETE BOOK
                        </button>
                        <br />
                        <button onClick={setDeleteConfirm("hide")}>
                            NO, do NOT delete Book
                        </button>
                    </div>
                </div>
                }
            {displayEditForm === false ? null :
                <div className='modal'>
                <span className='close-btn' onClick={setDisplayEditForm(false)}>&times;</span>
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
