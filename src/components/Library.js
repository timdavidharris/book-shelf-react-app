import { createClient } from '@supabase/supabase-js'
import React, { useState } from 'react'
import AddBook from './AddBook';
import Book from './Book';
import GithubLink from './GithubLink';

const supabaseUrl = 'https://viyyqfksopapspnrgxwi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpeXlxZmtzb3BhcHNwbnJneHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3MDk5MTIsImV4cCI6MTk2MjI4NTkxMn0.HkJJK2a8rUPa-EU3VUeiibZD76AJSjTK7rQ7BcWi_as';
const supabase = createClient(supabaseUrl, supabaseKey);

const randomNumber = () => {
    return Math.floor(Math.random() * 1000);
}

const dune = {
    title: 'Dune',
    author: 'Frank Herbert',
    pages: '658',
    bookRead: 'read',
    id: randomNumber(),
}

const nineteen84 = {
    title: '1984',
    author: 'George Orwell',
    pages: '298',
    bookRead: 'read',
    id: randomNumber(),
}

export default function Library() {
    const [library, setLibrary] = useState([]);

    async function upsertLibrary(library) {
        library.forEach(async function(book) {
            const newBook = {'data': book};
            const { data, error } = await supabase
                .from('test_table')
                .upsert({ id: newBook.data.id, book: newBook })
        });
    }
    
    async function getLibrary() {
        const { data, error } = await supabase
            .from('test_table')
            .select()
        const libraryArray = data.map((item) => {
            return item.book.data;
        });
        setLibrary(libraryArray);
    }

    async function readRows() {
        let data = await supabase.from('test_table').select('*');
    }

    const addBookToLibrary = (book) => {
        setLibrary(library.concat(book));
    }

    const updateLibrary = (book) => {
        let update = book;
        let bookIndex = library.findIndex(book => book.id === update.id);
        library.splice(bookIndex, 1, update);
        setLibrary(library)
        upsertLibrary(library);
    }

    const removeBook = (book) => {
        let updatedArray = library.filter(item => item.id !== book.id)
        setLibrary(updatedArray);
        upsertLibrary(updatedArray);
    }

    return(
        <main>
            <header>
                <h1>
                    Book Shelf
                </h1>
                <h2>
                    Books on Your Shelf
                </h2>
            </header>
            <div>
                <button onClick={() => upsertLibrary(library)}>
                    Click to Upsert Data
                </button>
                <button onClick={() => readRows()}>
                    Click to Read Rows
                </button>
                <button onClick={() => getLibrary()} >
                    Click to Get Library
                </button>
            </div>
            <section>
                <AddBook library={library} addBookToLibrary={addBookToLibrary}/>
            </section>
            <section className='book-parent-div'>
                {library === undefined || library.length === 0 ? 
                <div className='book-child-div'>
                    ☝️
                    <br />
                    <h3>Humm... no books? 
                    <br />
                    Click "Add A Book" to start your library!
                    </h3>
                </div> : 
                library.map((book) => {
                    return <Book key={book.id} book={book} updateLibrary={updateLibrary} removeBook={removeBook}/>;
                })}
            </section>
            <footer>
                <GithubLink />
            </footer>
        </main>
    );
}

