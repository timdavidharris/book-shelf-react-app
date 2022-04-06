import React from 'react';

export default function BookForm(props) {
    const toggleFormDisplay = props.toggleFormDisplay;
    const addBookComponent = props.addBookComponent;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const book = props.book;

    const addOrEditBook = () => {
        if (addBookComponent === true) {
            return (
                <label>
                This book is:
                    <div>
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
                    </div>
                </label>
            )
        } else {
            return (<div><label><strong>Edit Book</strong></label></div>)
        }
    }

    return (
        <div className='modal'>
        <span className='close-btn' onClick={() => toggleFormDisplay()}>&times;</span>
        <form className='modal-content add-a-book-form' onSubmit={handleSubmit}>
            { addOrEditBook() }
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
                { addBookComponent ? "Add Book" : "Update Book" }
            </button>
        </form>
        </div>
    );
}
