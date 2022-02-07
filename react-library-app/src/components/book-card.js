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
            </div>
        )
    }
}

export default BookCard;