import React from 'react';
import BookCard from './book-card';
import uniqid from 'uniqid';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            library: [this.setExampleBook_Dune(), this.setExampleBook_1984()],
            displayForm: false,
            bookTitle: '',
            bookAuthor: '',
            bookPages: '',
            isBookRead: 'read',
            book: {
                title: '',
                author: '',
                pages: '',
                bookRead: '',
                id: uniqid(),
            },
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
        this.setBookObj();
    }

    setBookObj = () => {
        this.setState({
            book: {
                title: this.state.bookTitle,
                author: this.state.bookAuthor,
                pages: this.state.bookPages,
                bookRead: this.state.isBookRead,
                id: uniqid(),
            },
        });
    }

    removeBook = (e) => {
        let bookByID = e.target.dataset.key
        this.setState({
            library: this.state.library.filter(book => book.id !== bookByID),
        })
    }

    toggleFormDisplay = () => {
        this.state.displayForm === true ? this.setState({ displayForm: false }) : this.setState({ displayForm: true });
    }

    // consoleLogLibrary = () => {
    //     console.log(this.state.library);
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            library: this.state.library.concat(this.state.book),
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
    }

    render() {
        return (
            <div id='form-and-card-div'>
            {/* <button onClick={this.consoleLogLibrary}>
                console.log library
            </button> */}
                <div id='book-parent-div'>
                    {this.state.library.map((book) => {
                        return <BookCard key={book.id} book={book} removeBook={this.removeBook} updateLibraryArray={this.updateLibraryArray}/>;
                    })}
                </div>
                <button id='toggle-btn' onClick={this.toggleFormDisplay}>
                    Toggle Add A Book Form
                </button>
                {this.state.displayForm === false ? null : 
                <form id='add-a-book-form' onSubmit={this.handleSubmit}>
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
                }
            </div>
        )
    }
}

export default Form;