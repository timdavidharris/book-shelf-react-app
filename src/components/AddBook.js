import React, { useState } from 'react';
import BookForm from './BookForm';

export default function NewBook(props) {
    const randomNumber = () => {
        return Math.floor(Math.random() * 100000);
    }
    const [formDisplay, setFormDisplay] = useState(false);
    const [book, setBook] = useState({title: "", author: "", pages: "", bookRead: "read", id: randomNumber()});
    const addBookToLibrary = props.addBookToLibrary;
    const addBookComponent = true;

    const toggleFormDisplay = () => {
        if (formDisplay === false) {
            setFormDisplay(true);
        } else {
            setFormDisplay(false);
        }
    }

    const renderForm = () => {
        return (<BookForm handleChange={handleChange} handleSubmit={handleSubmit} book={book} addBookComponent={addBookComponent} toggleFormDisplay={toggleFormDisplay}/>)
    }

    const handleChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleFormDisplay();
        addBookToLibrary(book);
        setBook({title: "", author: "", pages: "", bookRead: "read",});
    }

    return(
        <div className='form-and-card-div'>
            <button className='toggle-btn' onClick={() => setFormDisplay(true)}>
                Add A Book
            </button>
            <div>
            { formDisplay === false ? null : renderForm() }
            </div>
        </div>
    )
}
