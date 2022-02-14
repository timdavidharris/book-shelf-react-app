import React from 'react';

class BookCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookTitle: props.book.title,
            bookAuthor: props.book.author,
            bookPages: props.book.pages,
            isBookRead: props.book.bookRead,
            book: {
                title: props.book.title,
                author: props.book.author,
                pages: props.book.pages,
                bookRead: props.book.bookRead,
                id: props.book.id,
            },
            removeBook: props.removeBook,
            hideEditForm: true,
        }
        this.updateReadStatus = this.updateReadStatus.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    deleteBook = (e) => {
        return this.state.removeBook(e);
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        console.log(name, value);

        this.setState({
            [name]: value,
            book: {
                title: this.state.bookTitle,
                author: this.state.bookAuthor,
                pages: this.state.bookPages,
                bookRead: this.state.isBookRead,
                id: this.state.book.id,
            },
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.toggleEditFormDisplay();
    }

    updateReadStatus = () => {
        if (this.state.book.bookRead === "read") {
            this.setState({ 
                book: { 
                    title: this.state.book.title,
                    author: this.state.book.author,
                    pages: this.state.book.pages,
                    bookRead: "unread", 
                    id: this.state.book.id,
                } 
            })
        } else {
            this.setState({ 
                book: { 
                    title: this.state.book.title,
                    author: this.state.book.author,
                    pages: this.state.book.pages,
                    bookRead: "read", 
                    id: this.state.book.id,
                } 
            })
        }
    }

    toggleEditFormDisplay = () => {
        this.state.hideEditForm === true ? this.setState({hideEditForm: false}) : this.setState({hideEditForm: true});
    }

    render() {
        return (
            <div id='book-child-div'>
                {`${this.state.bookTitle} by ${this.state.bookAuthor} has ${this.state.bookPages} pages and is ${this.state.isBookRead}`}
                <button onClick={this.updateReadStatus}>
                    Change Read Status
                </button>
                <button onClick={this.toggleEditFormDisplay}>
                    Edit Book
                </button>
                {this.state.hideEditForm === true ? null : 
                    <form id='add-a-book-form' onSubmit={this.handleSubmit}>
                    <label>
                        Book Title
                    <input 
                        name="bookTitle"
                        type="text"
                        value={this.state.bookTitle}
                        onChange={this.handleChange}
                    />
                    </label>
                    <label>
                        Author
                    <input
                        name="bookAuthor"
                        type="text"
                        value={this.state.bookAuthor}
                        onChange={this.handleChange}
                    />
                    </label>
                    <label>
                        Number of Pages
                    <input
                        name="bookPages"
                        type="number"
                        value={this.state.bookPages}
                        onChange={this.handleChange}
                    />
                    </label>
                    <button data-key={this.state.book.id} onClick={this.deleteBook}>
                    Remove Book
                    </button>
                    <br />
                    <button type='submit'>
                        EDIT
                    </button>
                </form>
                }
            </div>
        )
    }
}

export default BookCard;