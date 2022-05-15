import { createClient } from '@supabase/supabase-js'
import React, { useState } from 'react'
import AddBook from './AddBook';
import Book from './Book';
import GithubLink from './GithubLink';
import PlaceholderBook from './PlaceholderBook';

const supabaseUrl = 'https://viyyqfksopapspnrgxwi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpeXlxZmtzb3BhcHNwbnJneHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3MDk5MTIsImV4cCI6MTk2MjI4NTkxMn0.HkJJK2a8rUPa-EU3VUeiibZD76AJSjTK7rQ7BcWi_as';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Library() {
    const [library, setLibrary] = useState([]);
    const [awaitLibrary, setAwaitLibrary] = useState(true);

    async function upsertBook(book) {
        const newBook = {'data': book};
        await supabase
            .from('book_table')
            .upsert({ id: book.id, book: newBook })
    }
    
    async function getLibrary() {
        const { data } = await supabase
            .from('book_table')
            .select()
        const libraryArray = data.map((item) => {
            return item.book.data;
        });
        setLibrary(libraryArray);
        setAwaitLibrary(false);
    }

    async function removeBook(deletedBook) {
        let updatedArray = library.filter(item => item.id !== deletedBook.id)
        setLibrary(updatedArray);
        await supabase
            .from('book_table')
            .delete()
            .match({ id: deletedBook.id });
    }

    (async function initialLoad() {
         if (awaitLibrary) {
            getLibrary();
         }
    })()

    const addBookToLibrary = (book) => {
        setLibrary(library.concat(book));
        library[library.length] = book;
        upsertBook(book);
    }

    const updateLibrary = (updatedBook) => {
        let bookIndex = library.findIndex(book => book.id === updatedBook.id);
        library[bookIndex] = updatedBook;
        setLibrary(library)
        upsertBook(updatedBook);
    }

    const renderBooks = () => {
        if (awaitLibrary) {
            return <div><h3>Loading Your Library ...</h3></div>;
        } else if (library.length === 0) {
            return <PlaceholderBook />
        } else {
            return library.map((book) => {
                return <Book key={book.id} book={book} updateLibrary={updateLibrary} removeBook={removeBook}/>
            })
        }
    }

    return(
        <main>
            <div id='content-wrap'>
            <header>
                <h1>
                    Book Shelf
                </h1>
                <h2>
                    Books on Your Shelf
                </h2>
            </header>
            <section>
                <AddBook library={library} addBookToLibrary={addBookToLibrary}/>
            </section>
            <section className='book-parent-div'>
                { renderBooks() }
            </section>
            </div>
            <section>
                <GithubLink />
            </section>
        </main>
    );
}

