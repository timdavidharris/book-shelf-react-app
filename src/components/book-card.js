import React from 'react';

class BookCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookTitle: props.book.title,
            bookAuthor: props.book.author,
            bookPages: props.book.pages,
            isBookRead: props.book.bookRead,
            id: props.book.id,
            removeBook: props.removeBook,
            hideEditForm: true,
        }
        this.updateReadStatus = this.updateReadStatus.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleEditFormDisplay = this.toggleEditFormDisplay.bind(this);
    }

    deleteBook = (e) => {
        if (window.confirm(`Click "OK" if you want to delete ${this.state.bookTitle} from your shelf`)) {
            return this.state.removeBook(e);
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.toggleEditFormDisplay();
    }

    updateReadStatus = () => {
        this.state.isBookRead === "read" ? this.setState({ isBookRead: "unread" }) : this.setState({ isBookRead: "read" });
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
                    <button data-key={this.state.id} onClick={this.deleteBook}>
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