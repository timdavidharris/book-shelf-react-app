import React from 'react';
import NewBook from './components/new-book';
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
          <NewBook />
          <GitHubLink />
        </section>
      </div>
    )
  }
}

export default App;