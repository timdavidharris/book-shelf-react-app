import React, { useState } from 'react';

// For Reference:
// https://medium.com/nerd-for-tech/how-to-build-forms-with-multiple-input-fields-using-react-hooks-677da2b851aa

export default function NewBook(props) {
    const randomNumber = () => {
        return Math.floor(Math.random() * 100000);
    }
    const [formDisplay, setFormDisplay] = useState(false);
    const addBookToLibrary = props.addBookToLibrary;
    const [book, setBook] = useState({
        title: "", 
        author: "", 
        pages: "", 
        bookRead: "read", 
        id: randomNumber()});

    const handleChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBookToLibrary(book);
        setFormDisplay(false);
        setBook({title: "", author: "", pages: "", bookRead: "read",});
    }

    return(
        <div className='form-and-card-div'>
            <button className='toggle-btn' onClick={() => setFormDisplay(true)}>
                Add A Book
            </button>
            {formDisplay === false ? null : 
            <div className='modal'>
            <span className='close-btn' onClick={() => setFormDisplay(false)}>&times;</span>
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
