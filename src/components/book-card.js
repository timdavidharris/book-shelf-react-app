import React from 'react';

class BookCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {
                title: props.book.title,
                author: props.book.author,
                pages: props.book.pages,
                bookRead: props.book.bookRead,
                id: props.book.id,
            },
            removeBook: props.removeBook,
            hideEdit: true,
        }
        this.updateReadStatus = this.updateReadStatus.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook = (e) => {
        return this.state.removeBook(e);
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

    editBook = () => {
        this.state.hideEdit === true ? this.setState({hideEdit: false}) : this.setState({hideEdit: true});
    }

    render() {
        return (
            <div id='book-child-div'>
                {`${this.state.book.title} by ${this.state.book.author} has ${this.state.book.pages} pages and is ${this.state.book.bookRead}`}
                <button onClick={this.updateReadStatus}>
                    Change Read Status
                </button>
                <button data-key={this.state.book.id} onClick={this.deleteBook}>
                    Remove Book
                </button>
                <button onClick={this.editBook}>
                    Edit Book
                </button>
                {this.state.hideEdit === true ? null : 
                    <form id='add-a-book-form' onSubmit={this.handleSubmit}>
                    <label>
                        This book is:
                        <br />
                        <select 
                            name="isBookRead"
                            value={this.state.book.bookRead}
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
                        value={this.state.book.title}
                        onChange={this.handleChange}
                        required
                    />
                    </label>
                    <label>
                        Author
                    <input
                        name="bookAuthor"
                        type="text"
                        value={this.state.book.author}
                        onChange={this.handleChange}
                        required
                    />
                    </label>
                    <label>
                        Number of Pages
                    <input
                        name="bookPages"
                        type="number"
                        value={this.state.book.pages}
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

export default BookCard;