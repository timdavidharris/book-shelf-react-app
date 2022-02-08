import React from 'react';
import Form from './components/input-form';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>
          Book Shelf
        </h1>
        <h2>
          Books on Your Shelf
        </h2>
        <section id='book-cards'>
          <Form />
        </section>
      </div>
    )
  }
}

export default App;