import { createClient } from '@supabase/supabase-js'
import React from 'react'

const supabaseUrl = 'https://viyyqfksopapspnrgxwi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpeXlxZmtzb3BhcHNwbnJneHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3MDk5MTIsImV4cCI6MTk2MjI4NTkxMn0.HkJJK2a8rUPa-EU3VUeiibZD76AJSjTK7rQ7BcWi_as';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function SupabaseComponent(props) {
    const library = props.library;
    let newArray = library.map((book) => { return {'data': book} });
    select();
    insertRow(newArray);
    return(null);
}

async function select() {
    let { data: test_table, error} = await supabase.from('test_table').select('*');
    return(null);
}

async function insertRow(library) {
    const{ data, error } = await supabase.from('test_table').insert(library);
    return(null);
}
