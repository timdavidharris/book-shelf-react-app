import React from 'react';
import BookCard from './book-card';
import uniqid from 'uniqid';
import SupabaseComponent from '../supabaseClient';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            library: localStorage.getItem('libraryArray') === null ? [this.setExampleBook_Dune(), this.setExampleBook_1984()] : JSON.parse(localStorage.getItem('libraryArray')),
            displayForm: false,
            bookTitle: '',
            bookAuthor: '',
            bookPages: '',
            isBookRead: 'read',
            id: uniqid(),
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeBook = this.removeBook.bind(this);
        this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
        this.updateLibraryArray = this.updateLibraryArray.bind(this);
    }

    setExampleBook_Dune = () => {
        let book = {
            title: 'Dune',
            author: 'Frank Herbert',
            pages: '658',
            bookRead: 'read',
            id: uniqid(),
        }
        return book;
    }

    setExampleBook_1984 = () => {
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
        const value = e.target.value;
        const name = e.target.name;

        this.setState({ [name]: value });
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
        let updatedArray = this.state.library.filter(item => item.id !== book.id)
        this.setState({ library: updatedArray })
        this.updateLocalStorage(updatedArray);
    }

    toggleFormDisplay = () => {
        this.state.displayForm === true ? this.setState({ displayForm: false }) : this.setState({ displayForm: true });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            library: this.state.library.concat(this.bookObj()),
            bookTitle: '',
            bookAuthor: '',
            bookPages: '',
            isBookRead: 'read',
        });
        return this.toggleFormDisplay();
    }

    updateLibraryArray = (book) => {
        let update = book;
        let bookIndex = this.state.library.findIndex(book => book.id === update.id);
        this.state.library.splice(bookIndex, 1, update);
        this.setState({ library: this.state.library });
        this.updateLocalStorage(this.state.library);
    }

    updateLocalStorage = (libraryArray) => {
        localStorage.setItem('libraryArray', JSON.stringify(libraryArray));
    }

    render() {
        return (
            <div className='form-and-card-div'>
            <SupabaseComponent library={this.state.library}/>
                <div className='book-parent-div'>
                    {this.state.library === undefined ? null : this.state.library.map((book) => {
                        return <BookCard key={book.id} book={book} removeBook={this.removeBook} updateLibraryArray={this.updateLibraryArray}/>;
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
                            name="isBookRead"
                            value={this.state.isBookRead}
                            onChange={this.handleChange}
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
                        name="bookTitle"
                        type="text"
                        value={this.state.bookTitle}
                        onChange={this.handleChange}
                        required
                    />
                    </label>
                    <label>
                        Author
                    <input
                        name="bookAuthor"
                        type="text"
                        value={this.state.bookAuthor}
                        onChange={this.handleChange}
                        required
                    />
                    </label>
                    <label>
                        Number of Pages
                    <input
                        name="bookPages"
                        type="number"
                        value={this.state.bookPages}
                        onChange={this.handleChange}
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
}

export default Form;