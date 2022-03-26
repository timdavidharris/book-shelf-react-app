import { createClient } from '@supabase/supabase-js'
import React, { useState } from 'react'
import AddBook from './components/AddBook';
import Book from './components/Book';
import GithubLink from './GithubLink';

const supabaseUrl = 'https://viyyqfksopapspnrgxwi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpeXlxZmtzb3BhcHNwbnJneHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3MDk5MTIsImV4cCI6MTk2MjI4NTkxMn0.HkJJK2a8rUPa-EU3VUeiibZD76AJSjTK7rQ7BcWi_as';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function SupabaseComponent() {
    const [library, setLibrary] = useState([]);

    async function upsertRow(library) {
        library.forEach(async function(book) {
            const newBook = {'data': book};
            console.log(newBook);
            const { data, error } = await supabase
                .from('test_table')
                .upsert({ id: newBook.data.id, book: newBook })
        });
    }
    
    async function readRows() {
        let data = await supabase.from('test_table').select('*');
        console.log(data);
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
                <button onClick={() => upsertRow(library)}>
                    Click to Upsert Data
                </button>
                <button onClick={() => readRows()}>
                    Click to Read Rows
                </button>
            </div>
            <section>
                <AddBook />
            </section>
            <section>
                <Book />
            </section>
            <footer>
                <GithubLink />
            </footer>
        </main>
    );
}

