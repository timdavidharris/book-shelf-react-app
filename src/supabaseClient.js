import { createClient } from '@supabase/supabase-js'
import React from 'react'

const supabaseUrl = 'https://viyyqfksopapspnrgxwi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpeXlxZmtzb3BhcHNwbnJneHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3MDk5MTIsImV4cCI6MTk2MjI4NTkxMn0.HkJJK2a8rUPa-EU3VUeiibZD76AJSjTK7rQ7BcWi_as';
const supabase = createClient(supabaseUrl, supabaseKey);

function SupabaseComponent(props) {
    const library = props.library;
    select().then(insertRow(library));
    return(null);
}

async function select() {
    let { data: test_table, error } = await supabase.from('test_table').select('data');
}

async function insertRow(library) {
    const { data: test_table, error } = await supabase.from('test_table').insert(library);
    return(null);
}

export default SupabaseComponent;