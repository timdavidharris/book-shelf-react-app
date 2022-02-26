import React from 'react';
import Form from './components/input-form';
import GitHubLink from './components/github-link';

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
          <GitHubLink />
        </section>
      </div>
    )
  }
}

export default App;